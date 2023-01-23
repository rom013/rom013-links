import * as Dialog from '@radix-ui/react-dialog'
import { useState } from 'react';
import InputMask from 'react-input-mask';

const wait = () => new Promise((resolve) => setTimeout(resolve, 1000));

export function Form() {
    const [open, setOpen] = useState(false);

    return (
        <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Trigger asChild>
                <button className="box-link-style py-5" size="large">
                    <span className="text-gradient font-bold">
                        Solicitar orçamento
                    </span>
                </button>
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className="bg-black/80 fixed inset-0 DialogOverlay" />
                <Dialog.Content className="bg-neutral-900 rounded-md fixed top-1/2 left-1/2 w-full max-w-3xl max-h-[85vh] p-6 DialogContent overflow-auto flex items-center flex-col">
                    <Dialog.Title 
                        className="font-medium text-white text-center text-base border-b border-violet-700 mb-6 pb-2 flex-1 w-full"
                    >
                        Solicite seu orçamento
                    </Dialog.Title>
                    {/* <Dialog.Description className="mx-3 my-5 text-slate-400 text-base leading-relaxed">
                        Make changes to your profile here. Click save when you're done.
                    </Dialog.Description> */}
                    {/* <form 
                        action='https://api.staticforms.xyz/submit'
                        method='POST'
                        // onSubmit={
                        //     (event)=>{
                        //         // event.preventDefault();
                        //         wait().then(() => setOpen(false));
                        //     }
                        // }
                    >
                        <input type="hidden" name="accessKey" value="4bc63384-f847-4c50-ab39-95ef32b88e22"/>
                        <input type="hidden" name="redirectTo" value="http://localhost:5173"/>

                        <fieldset className="flex gap-5 items-center mb-4">
                            <label className="text-sm w-24 text-white" htmlFor="name">
                                Nome
                            </label>
                            <input 
                                className="input-form" 
                                name="name"
                                id="name"
                                autoComplete="disabled"
                                required
                                maxLength={64}
                            />
                        </fieldset>
                        <fieldset className="flex gap-5 items-center mb-4">
                            <label className="text-sm w-24 text-white" htmlFor="mobile">
                                Celular
                            </label>
                            <InputMask
                                className="input-form" 
                                name="tell"
                                id="tell"
                                autoComplete="disabled"
                                required
                                placeholder="(__) ____ ____"
                                type={"tel"}
                                mask="(99) 9999 9999"
                            />
                        </fieldset>
                        <fieldset className="flex gap-5 items-center mb-4">
                            <label className="text-sm w-24 text-white" htmlFor="msg">
                                Mensagem
                            </label>
                            <textarea 
                                className="min-h-[64px] max-h-[250px] input-form" 
                                name="msg"
                                id="msg"
                                autoComplete="disabled"
                                required
                                maxLength={350}
                            />
                        </fieldset>
                        <div style={{ display: 'flex', marginTop: 25, justifyContent: 'flex-end' }}>
                            <button className="Button bg-violet-700 hover:bg-violet-800 text-white">
                                <div className="flex gap-3">
                                    <i className="fa-solid fa-paper-plane"></i>
                                    <span>Enviar solicitação</span>
                                </div>
                            </button>
                        </div>
                        <Dialog.Close asChild>
                            <button type="submit" className="absolute top-6 right-6 text-white" aria-label="Close">
                                <i className="fa-sharp fa-solid fa-xmark"></i>
                            </button>
                        </Dialog.Close>
                    </form> */}
                    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScb0cQ_41HNwqDcdTzCU3CJMDOXfzHOyptcGzop_7BSy03eow/viewform?embedded=true" width="640" height="698" frameborder="0" marginheight="0" marginwidth="0">Carregando…</iframe>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
}