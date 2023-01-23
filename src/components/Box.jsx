import { memo } from "react";

function Box({ name, url, icon = null }) {
    return (
        <div
            className="box-link-style"
        >
            <a
                href={url}
                className="w-full h-full block py-5 text-white"
            >
                <div className="flex gap-5 justify-center">
                    {
                        icon && <span>{icon}</span>
                    }
                    <span className="text-gradient font-bold">{name}</span>
                </div>
            </a>
        </div>
    )
}

export default memo(Box)