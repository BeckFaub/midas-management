import { createClient } from "@/utils/supabase/server"
import {redirect} from 'next/navigation'

export default async function PortfolioPage(){
    let supabase = createClient();

    let {data: {user} } = await supabase.auth.getUser();

    if(!user){
        return redirect('/');
    }

    return (
    <div className="flex">
        <h1>
            This is the current list of Portfolio Items.
        </h1>
    </div>
    )
}