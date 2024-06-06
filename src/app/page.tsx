import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
    return (
        <div className="flex flex-col pt-40 items-center justify-center px-5">
            <div>
                <h1 className="text-xl text-primary font-bold">CRUD (Create, Read, Update, Delete)</h1>
                <p className="text-muted-foreground max-w-lg text-justify">
                    Are the four basic operations for developing an application, being used in relational databases provided to system users.
                </p>
            </div>

            <div className="w-[512px] h-48 mt-5 space-y-5 px-5 md:px-0 text-left">
                <Button className="w-full rounded-none bg-primary hover:bg-primary/80 py-3 px-5 text-white">
                    <Link href="/category" >Category</Link>
                </Button>

                <Button className="w-full rounded-none bg-primary hover:bg-primary/80 py-3 px-5 text-white">
                    <Link href="/supplier" >Supplier</Link>
                </Button>

                <Button className="w-full rounded-none bg-primary hover:bg-primary/80 py-3 px-5 text-white">
                    <Link href="/product" >Product</Link>
                </Button>
            </div>
        </div>
    )
}