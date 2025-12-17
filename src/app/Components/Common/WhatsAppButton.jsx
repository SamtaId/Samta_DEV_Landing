"use client";

const WhatsAppButton = () => {
    return (
        <>
            <a
                href="https://wa.me/6281234567890?text=Halo%20Samta%20Dev,%20saya%20tertarik%20dengan%20layanan%20Anda"
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-float"
                aria-label="Chat WhatsApp"
            >
                <div className="whatsapp-tooltip">Chat dengan kami</div>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                >
                    <path
                        d="M16.03 2.66699C8.65333 2.66699 2.66667 8.65366 2.66667 16.0003C2.66667 18.0537 3.17333 20.0003 4.08 21.707L2.66667 29.3337L10.2933 27.9203C11.9867 28.827 13.9333 29.3337 16 29.3337C23.36 29.3337 29.3333 23.347 29.3333 16.0003C29.3333 8.65366 23.3733 2.66699 16.03 2.66699ZM23.2667 20.2537C22.96 21.2137 21.6533 22.0403 20.6 22.2537C20.0133 22.3737 19.24 22.467 16.8 21.4137C13.7467 20.1203 11.8267 16.9603 11.68 16.7603C11.5333 16.5603 10.4533 15.107 10.4533 13.5937C10.4533 12.0803 11.2533 11.347 11.5467 11.0403C11.84 10.7337 12.2267 10.627 12.4667 10.627C12.7067 10.627 12.9467 10.627 13.1467 10.6403C13.36 10.6537 13.64 10.5603 13.9067 11.2537C14.1867 11.9337 14.8533 13.447 14.9333 13.6137C15.0133 13.7803 15.08 13.987 14.96 14.187C14.84 14.387 14.7733 14.5203 14.6267 14.707C14.48 14.8937 14.32 15.1337 14.1867 15.267C14.04 15.4137 13.8933 15.5737 14.0667 15.8803C14.2533 16.187 14.84 17.187 15.7067 17.9603C16.8133 18.9337 17.72 19.227 18.0533 19.3737C18.3867 19.5203 18.56 19.4937 18.7467 19.2937C18.9333 19.0937 19.4933 18.427 19.6933 18.1203C19.8933 17.8137 20.0933 17.867 20.4 17.987C20.7067 18.107 22.2 18.8537 22.5333 19.0203C22.8667 19.187 23.0933 19.267 23.1733 19.4137C23.2533 19.5603 23.2533 20.2403 23.2667 20.2537Z"
                        fill="white"
                    />
                </svg>
                <span className="pulse-ring"></span>
            </a>

            <style jsx global>{`
                .whatsapp-float {
                    position: fixed;
                    width: 60px;
                    height: 60px;
                    bottom: 30px;
                    right: 30px;
                    background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
                    color: white;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 32px;
                    box-shadow: 0 4px 20px rgba(37, 211, 102, 0.4);
                    z-index: 9999;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    text-decoration: none;
                }

                .whatsapp-float:hover {
                    transform: translateY(-5px) scale(1.1);
                    box-shadow: 0 8px 30px rgba(37, 211, 102, 0.6);
                }

                .whatsapp-float:active {
                    transform: translateY(-3px) scale(1.05);
                }

                .whatsapp-float svg {
                    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
                }

                /* Tooltip Always Visible */
                .whatsapp-tooltip {
                    position: absolute;
                    right: 75px;
                    background: rgba(51, 51, 51, 0.95);
                    color: white;
                    padding: 10px 18px;
                    border-radius: 12px;
                    font-size: 14px;
                    white-space: nowrap;
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                    font-weight: 600;
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
                    backdrop-filter: blur(10px);
                }

                .whatsapp-tooltip::after {
                    content: '';
                    position: absolute;
                    right: -8px;
                    top: 50%;
                    transform: translateY(-50%);
                    border: 8px solid transparent;
                    border-left-color: rgba(51, 51, 51, 0.95);
                }

                .pulse-ring {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    border: 3px solid #25D366;
                    border-radius: 50%;
                    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
                }

                @keyframes pulse {
                    0% {
                        transform: scale(1);
                        opacity: 1;
                    }
                    50% {
                        transform: scale(1.3);
                        opacity: 0.5;
                    }
                    100% {
                        transform: scale(1.5);
                        opacity: 0;
                    }
                }

                /* Responsive */
                @media (max-width: 768px) {
                    .whatsapp-float {
                        width: 56px;
                        height: 56px;
                        bottom: 20px;
                        right: 20px;
                    }

                    .whatsapp-float svg {
                        width: 28px;
                        height: 28px;
                    }

                    .whatsapp-tooltip {
                        display: none;
                    }
                }

                @media print {
                    .whatsapp-float {
                        display: none !important;
                    }
                }
            `}</style>
        </>
    );
};

export default WhatsAppButton;
