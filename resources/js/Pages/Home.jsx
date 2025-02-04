import { Link } from "@inertiajs/react";
export default function Home({posts}) {
    console.log(posts);
    return (
        <>
            <p className="title">Home</p>
            <h1 className="text-center">Welcome !</h1>
            {posts.data.map(post => (//add .data for paginate in place of get
                <div key={post.id} className="p-4 border-b">
                    <div className="text-sm text-gray-500">
                        <span>Posted on: </span>
                        <span className="text-green-950">{new Date(post.created_at).toLocaleTimeString() }</span>
                    </div>
                    <p className="font-medium">{post.body}</p>
                </div>
            ))}
            <div>
                {posts.links.map(link => (
                    link.url ?(
                        <Link 
                            key={link.label}
                            href={link.url}
                            className={`p-1 mx-4 ${
                                link.active? "text-blue-500 font-bold" : "text-gray-500"
                            }`}
                        >
                            {link.label}
                        </Link>
                    ) : (
                        <span 
                            key={link.label}
                            dangerouslySetInnerHTML={{__html: link.label}}
                            className="p-1 mx-1 text-slate-500" >
                        </span>
                    )
                ))}
            </div>
        </>
    );
}
