import { FormContextProvider } from "@/components/form/form-context";
import { AlarmForm } from "@/components/form/alarm-form";

export default function Page() {
    return (
        <FormContextProvider>
            <main className="h-dvh w-dvw grid grid-cols-[auto_minmax(300px,_800px)_auto]">
                <div className="col-start-1 row-start-1" />

                <div className="col-start-2 row-start-1">
                    <AlarmForm />
                </div>

                <div className="col-start-3 row-start-1 " />
            </main>
        </FormContextProvider>
    );
}
