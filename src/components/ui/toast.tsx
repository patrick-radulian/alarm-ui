"use client";

import { CheckCircleIcon } from "lucide-react";
import { toast as sonnerToast } from "sonner";

export const toast = {
    success: (toast: Omit<ToastProps, "id">) => {
        return sonnerToast.custom(
            id => (
                <Toast
                    id={id}
                    title={toast.title}
                    description={toast.description}
                    button={{
                        label: toast.button.label,
                        onClick: toast.button.onClick,
                    }}
                />
            ),
            {
                duration: toast.duration,
            }
        );
    },
};

function Toast(props: ToastProps) {
    const { title, description, button, id } = props;

    return (
        <div className="flex rounded-md shadow-lg w-full md:max-w-[480px] text-white items-center p-4 bg-red-600 hover:bg-red-700 focus-visible:bg-red-700 ring-0 focus-visible:ring-0 border-2 border-white">
            <div className="flex flex-1 items-center gap-4">
                <CheckCircleIcon size={32} />
                <div className="w-full">
                    <p className="text-md font-medium text-white">{title}</p>
                    <p className="text-sm text-white/75">{description}</p>
                </div>
            </div>
            <div className="ml-5 shrink-0 rounded ">
                <button
                    className="rounded bg-white px-3 py-1 text-md font-bold text-red-700 outline-offset-6 outline-2 outline-white/0 hover:outline-white focus-visible:outline-white ring-0 focus-visible:ring-0"
                    onClick={() => {
                        button.onClick();
                        sonnerToast.dismiss(id);
                    }}
                >
                    {button.label}
                </button>
            </div>
        </div>
    );
}

interface ToastProps {
    id: string | number;
    title: string;
    description: string;
    duration?: number;
    button: {
        label: string;
        onClick: () => void;
    };
}
