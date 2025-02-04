import { Link } from "@inertiajs/react";
export default function Home({name}) {
    return (
        <div>
            <p className="title">Home</p>
            <h1 className="text-center">Welcome {name}!</h1>
            <Link preserveScroll href="/" className="block title mt-[1000px]">{new Date().toLocaleTimeString()}</Link>
        </div>
    );
}
