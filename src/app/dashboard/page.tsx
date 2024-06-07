"use client";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Dialog,
    DialogTrigger
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { api } from "@/lib/api";
import { ChangeEvent, FormEvent, useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

export default function Dashboard() {
    const [searchValue, setSearchValue] = useState<string>('');
    const [products, setProducts] = useState<any[]>([]); 

    const { toast } = useToast();

    async function onSearch(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const convertSearchValue = parseInt(searchValue);

        await api.get(`/product/?category=${convertSearchValue}`).then((res) => {
            console.log(res.data.ProductAssociatedThisCategory)
            setProducts(res.data.ProductAssociatedThisCategory);
        }).catch((error) => {
            if (error.response) {
                console.log('Error Response', error.response)
                toast({
                    variant: 'destructive',
                    description: error.response.data.message
                })
            } else if (error.request) {
                console.error('Error Request', error.request);
            } else {
                console.error('Error Api', error);
            }
        })
    }

    function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
        if (event && event.target) {
            setSearchValue(event.target.value);
        }
    }

    async function onDelete(productId: string) {
        await api.delete(`/product/${productId}`).then((res) => {
            toast({
                className: 'bg-primary text-white',
                description: res.data.message
            })
        }).catch((error) => {
            if (error.response) {
                toast({
                    variant: 'destructive',
                    description: error.response.data.message
                })
            }
        })

        location.reload();
    }

    return (
        <div className="flex flex-col mt-20 items-center w-[100vw] h-[100vh]">
            <form action="" method="GET" className="w-[300px]" onSubmit={onSearch}>
                <Input id="inputSearch" placeholder="Search products by category ID" onChange={handleInputChange}/>
                <Button type="submit" className="mt-5 w-full rounded-none bg-primary hover:bg-primary/80 py-3 px-5 text-white">Search</Button>
            </form>

            <div className="grid gap-y-5 mt-10 w-[80%]">
                {products.map((product, index) => (
                    <Card key={index} className="bg-primary/10 shadow-none rounded-none">
                        <CardHeader>
                            <CardTitle className="text-neutral-700">{product.id}</CardTitle>
                        </CardHeader>

                        <CardContent className="grid md:grid-cols-2 gap-y-3">
                            <div>
                                <p className="text-primary font-semibold">NAME</p>
                                <p className="text-muted-foreground">{product.name}</p>
                            </div>

                            <div>
                                <p className="text-primary font-semibold">DESCRIPTION</p>
                                <p className="text-muted-foreground">{product.description}</p>
                            </div>

                            <div>
                                <p className="text-primary font-semibold">AMOUNT</p>
                                <p className="text-muted-foreground">{product.amount}</p>
                            </div>

                            <div>
                                <p className="text-primary font-semibold">PRICE</p>
                                <p className="text-muted-foreground">{product.price}</p>
                            </div>

                            <div>
                                <p className="text-primary font-semibold">CATEGORY</p>
                                <p className="text-muted-foreground">{product.categoryId}</p>
                            </div>

                            <div>
                                <p className="text-primary font-semibold">SUPPLIER</p>
                                <p className="text-muted-foreground">{product.supplierId}</p>
                            </div>
                        </CardContent>    

                        <CardFooter className="flex justify-between">
                            <Dialog>
                                <DialogTrigger asChild>
                                    <Button className="flex items-center gap-x-2 rounded-none w-[100px] font-semibold">
                                        <FaEdit />
                                        Edit
                                    </Button>
                                </DialogTrigger>       
                            </Dialog>

                            <AlertDialog>
                                <AlertDialogTrigger asChild>
                                    <Button className="flex items-center gap-x-2 rounded-none w-[100px] bg-destructive hover:bg-destructive/80 font-semibold">
                                        <FaTrashAlt/>
                                        Delete
                                    </Button>
                                </AlertDialogTrigger>
                                <AlertDialogContent>
                                    <AlertDialogHeader>
                                        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                                        <AlertDialogDescription>
                                            This action cannot be undone. This will permanently delete the product
                                        </AlertDialogDescription>
                                    </AlertDialogHeader>

                                    <AlertDialogFooter>
                                        <AlertDialogCancel className="rounded-none">Cancel</AlertDialogCancel>
                                        <AlertDialogAction onClick={() => onDelete(product.id)} className="rounded-none bg-destructive hover:bg-destructive/80 flex items-center gap-x-2">
                                            <FaTrashAlt/> Continue
                                        </AlertDialogAction>
                                    </AlertDialogFooter>
                                </AlertDialogContent>
                            </AlertDialog>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    )
}