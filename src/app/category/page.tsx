"use client"
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { HiArrowLeft } from "react-icons/hi2";

const categorySchema = z.object({
    name: z.string().min(2, { message: 'Name must be at least 2 characters long' }),
    description: z
    .string()
    .min(5, { message: 'Description must be at least 5 characters long' }),
})

type categoryInfer = z.infer<typeof categorySchema>;

export default function Category() {
    const stateForm = useForm<categoryInfer>({
        resolver: zodResolver(categorySchema),
        defaultValues: {
            name: '',
            description: ''
        },
    })

    async function onSubmit(values: categoryInfer) {
        console.log(values)
    }

    return (
        <div className="w-[100vw] h-[100vh] flex flex-col items-center mt-10 px-5 md:px-0">
            <h1 className="text-xl text-center font-semibold text-primary">
                Category
            </h1>
            <p className="text-muted-foreground text-justify">
                We first need to associate a product with a category. So start by creating a category
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-x-5 pt-20">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="300.57" height="239.42" viewBox="0 0 550.59998 412.44495"><path d="m550.59998,411.25495c0,.65997-.53003,1.19-1.19,1.19H1.19c-.66,0-1.19-.53003-1.19-1.19s.53-1.19,1.19-1.19h548.21997c.65997,0,1.19.53003,1.19,1.19Z" fill="#2e2e43" stroke-width="0"/><path d="m436.65881,84.78436H114.07564c-4.45853,0-8.08586-3.62733-8.08586-8.08586v-24.85271c0-4.45853,3.62733-8.08586,8.08586-8.08586h322.58317c4.45853,0,8.08586,3.62733,8.08586,8.08586v24.85271c0,4.45853-3.62733,8.08586-8.08586,8.08586Z" fill="#fff" stroke="#bab7c9" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/><path d="m436.65881,237.99009H114.07564c-4.45853,0-8.08586-3.62733-8.08586-8.08586v-24.85271c0-4.45853,3.62733-8.08586,8.08586-8.08586h322.58317c4.45853,0,8.08586,3.62733,8.08586,8.08586v24.85271c0,4.45853-3.62733,8.08586-8.08586,8.08586Z" fill="#fff" stroke="#bab7c9" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/><path d="m207.65881,347.99009h-94.58317c-4.45853,0-8.08586-3.62733-8.08586-8.08586v-24.85271c0-4.45853,3.62733-8.08586,8.08586-8.08586h94.58317c4.45853,0,8.08586,3.62733,8.08586,8.08586v24.85271c0,4.45853-3.62733,8.08586-8.08586,8.08586Z" fill="#16a34a" stroke-width="0"/><line x1="106.69815" y1="1" x2="177.44809" y2="1" fill="none" stroke="#bab7c9" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/><line x1="106.69815" y1="154.20573" x2="238.12288" y2="154.20573" fill="none" stroke="#bab7c9" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/><rect x="390.51069" y="369.32254" width="13.20445" height="18.7301" transform="translate(-141.44328 273.52017) rotate(-32.59)" fill="#f1a1a4" stroke-width="0"/><polygon points="362.34782 155.10185 348.29375 159.90111 348.07325 139.60802 360.86264 139.46533 362.34782 155.10185" fill="#f1a1a4" stroke-width="0"/><circle cx="349.71408" cy="131.15741" r="14.05406" fill="#f1a1a4" stroke-width="0"/><path d="m353.55997,129.72413c-2.34774-.0454-3.92371-2.39963-4.86412-4.56578-.9404-2.15319-1.90674-4.64361-4.09234-5.51915-1.79-.71341-4.87708,4.26745-6.3039,2.97036-1.48518-1.35546-.12972-8.43762,1.42032-9.71526s3.67728-1.55003,5.6748-1.67326c4.89654-.27887,9.81904.05837,14.63126,1.01173,2.97035.58369,6.04448,1.48517,8.20414,3.60593,2.74337,2.69147,3.4827,6.79031,3.71619,10.62324.24645,3.92372.05837,8.03552-1.80946,11.49877-1.87432,3.45677-5.83694,6.03151-9.68283,5.20137-.40859-2.08185-.0454-4.21557.08431-6.34281.12972-2.11427-.05837-4.39716-1.36843-6.07042s-4.07289-2.30883-5.55807-.79771" fill="#2f2e43" stroke-width="0"/><path d="m370.90216,134.40016c1.39438-1.04416,3.06115-1.92619,4.79279-1.73162,1.87432.20105,3.46974,1.73162,3.96912,3.54756s-.01946,3.82644-1.15442,5.33107-2.84065,2.5034-4.65658,3.01575c-1.05065.29834-2.19859.42155-3.21033,0-1.48518-.62261-2.30234-2.49692-1.73811-4.00803" fill="#2f2e43" stroke-width="0"/><path id="uuid-31bdf68e-d938-48b7-86ad-7ba8e8b265d3-91-89-41-159" d="m318.60318,267.17111c-.88202,4.62416.87555,8.82674,3.9367,9.37801,3.05466.55127,6.25202-2.75633,7.14053-7.38049.38264-1.84188.29833-3.74861-.24645-5.55807l10.81132-72.48184-14.5664-2.56825-4.79279,73.51952c-1.17387,1.50464-1.95861,3.24924-2.28289,5.11057h0v-.01946h-.00002Z" fill="#f1a1a4" stroke-width="0"/><path d="m348.03434,150.58794l-9.92279.11025c-7.00432,1.13496-8.86567,4.90303-10.37678,11.82954-2.31532,10.56486-5.27271,24.64485-4.6501,24.83943.99228.32427,17.96481,8.08091,26.55809,6.16122l-1.60192-42.94042h-.00649Z" fill="#16a34a" stroke-width="0"/><rect x="347.12191" y="381.03382" width="13.20445" height="18.7301" transform="translate(-4.33864 3.97541) rotate(-.64)" fill="#f1a1a4" stroke-width="0"/><path d="m334.46021,411.32408c-1.39438.01948-2.62014,0-3.55406-.07782-3.51514-.27887-6.8811-2.83416-8.58678-4.32581-.76528-.66802-1.01823-1.75758-.63559-2.69149h0c.2724-.66802.83014-1.18036,1.53057-1.3944l9.24182-2.74984,14.89717-10.29247.16863.29835c.06486.11024,1.5695,2.74984,2.08184,4.53984.19456.68097.15565,1.2452-.12972,1.68621-.19456.3048-.46696.48641-.68746.59665.2724.27887,1.12847.8496,3.76158,1.23871,3.82644.57073,4.59821-3.41137,4.62416-3.58l.02595-.13621.11026-.07782c1.80946-1.1998,2.91847-1.73811,3.3076-1.62786.24645.06484.64206.18806,1.84837,10.97993.11026.33726.90149,2.81472.40859,5.20138-.53181,2.5942-11.84898,1.82242-14.10594,1.6473-.06486.00649-8.52194.70694-14.31995.76528h.01946-.00649v.00008Z" fill="#2f2e43" stroke-width="0"/><path d="m383.21163,408.21105c-1.55004.01948-2.97684-.15565-3.99506-.32427-.99877-.16863-1.79-.95335-1.95861-1.95214h0c-.12972-.71988.08431-1.43976.55774-1.98456l6.38172-7.22485,7.18593-16.61582.3048.16214c.11024.05839,2.78226,1.50464,4.17017,2.74984.52532.47343.79121.97282.79121,1.50464,0,.36319-.13621.66153-.27238.86258.38266.09081,1.40734.11673,3.84589-.9404,3.54754-1.54355,2.0948-5.33105,2.02996-5.48025l-.0519-.12972.05839-.11673c.90149-1.97157,1.56299-3.02222,1.94565-3.13899.24645-.06484.64206-.18806,7.38049,8.33384.27238.22698,2.25694,1.90674,3.10008,4.18964.91444,2.48395-9.07969,7.81501-11.10316,8.85916-.05839.0519-10.5065,7.81501-14.79989,10.03953-1.70569.88202-3.73565,1.17387-5.584,1.18686l.01946.01948h-.00649v.00004Z" fill="#2f2e43" stroke-width="0"/><path d="m368.17827,224.18528l-36.96729.40859-2.97035,34.42499,16.0905,126.90806,18.87278-.21403-8.35981-73.30549,31.35086,65.925,16.64175-11.93332-24.59297-61.59919s7.94473-53.98521,1.08309-67.33236c-6.85517-13.34713-11.14207-13.30175-11.14207-13.30175v.01946h-.00649v.00004Z" fill="#2f2e43" stroke-width="0"/><polygon points="386.58409 226.07905 327.87095 226.73407 344.64242 150.63335 370.22768 150.34149 386.58409 226.07905" fill="#16a34a" stroke-width="0"/><path id="uuid-0d1d7be6-7e67-43a2-9b15-a4bbed67d7bc-92-90-42-160" d="m392.31726,266.35395c.98581,4.61117-.68097,8.84622-3.72266,9.46233-3.04819.6226-6.31686-2.61365-7.29618-7.22485-.42155-1.83538-.38264-3.74212.11673-5.56454l-12.4262-72.2289,14.50157-2.89252,6.4271,73.40277c1.20629,1.47869,2.02996,3.21033,2.39964,5.05867h0v-.01296Z" fill="#f1a1a4" stroke-width="0"/><path d="m360.31137,150.45175l9.92279-.11025c7.02378.9858,8.96942,4.70846,10.64269,11.60254,2.54879,10.51297,5.81099,24.51514,5.20136,24.72918-.99228.33724-17.77673,8.47005-26.40892,6.74491l.65504-42.96637h-.01296Z" fill="#16a34a" stroke-width="0"/></svg>
                </div>
                <div>
                    <Form {...stateForm}>
                        <form onSubmit={stateForm.handleSubmit(onSubmit)} method="POST" className="w-[300px] space-y-5">
                            <FormField control={stateForm.control} name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                        <Input {...field} placeholder="Eletronics"/>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}/>
                            <FormField control={stateForm.control} name="description"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Description</FormLabel>
                                    <FormControl>
                                        <Input {...field} placeholder="Computers and Tablets"/>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}/>
                            <Button type="submit" className="w-full rounded-none bg-primary hover:bg-primary/80 py-3 px-5 text-white">Submit</Button>
                        </form>
                    </Form>
                </div>
            </div>

            <Link href="/">
                <h2 className="flex items-center gap-x-2 pt-20 cursor-pointer text-md font-semibold text-muted-foreground hover:text-primary">
                    <HiArrowLeft />
                    Return to Home
                </h2>
            </Link>
        </div>
    )
}