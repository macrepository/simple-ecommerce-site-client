import axios from 'axios';
import type { ApiResponse, FieldError } from '@/types/apiResponse';
import { message } from '@/validations/messages';

export async function catchErrors<T>(callback: () => Promise<T>, setErrors: (errors: Record<string, string>) => void, errorFlash: (message: string) => void): Promise<void> {
    try {
        await callback();
    } catch (error: unknown) {

        if (axios.isAxiosError(error) && error?.response) {
            const responseError = error.response?.data as ApiResponse;
            const body = responseError.body
            const responseMessage = responseError.message || message.errorOccurred

            let errors: Record<string, string> = {};
            if (Array.isArray(body)) {
                body.forEach((error: FieldError) => {
                    if (error?.field) {
                        errors[error?.field] = error.message
                    }
                });
            }

            if (Object.entries(errors).length > 0) {
                setErrors(errors);
            } else {
                console.error(error);
                errorFlash(responseMessage);
            }
        } else {
            console.error(error);
            errorFlash(message.errorOccurred);
        }
    }
}