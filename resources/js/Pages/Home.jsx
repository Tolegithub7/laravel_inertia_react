import { Link } from "@inertiajs/react";
import { useRoute } from "../../../vendor/tightenco/ziggy";
export default function Home({posts}) {
    const route = useRoute();
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
                    {/* <Link href={`/posts/${post.id}`} className="text-link">Read more ...</Link> */}
                    <Link href={route('posts.show', post)} className="text-link">Read more ...</Link>
                </div>
            ))}
            <div>
                {posts.links.map(link => (
                    link.url ?(
                        <Link 
                            key={link.label}
                            href={link.url}
                            dangerouslySetInnerHTML={{__html: link.label}}
                            className={`p-1 mx-4 ${
                                link.active? "text-blue-500 font-bold" : "text-gray-900"
                            }`}
                        />
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
