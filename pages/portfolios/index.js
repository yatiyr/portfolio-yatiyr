import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/BasePage";
import Link from "next/link";
import { useGetPosts } from "@/actions";

const Portfolios = () => {

  const {data, error, loading} = useGetPosts();

  const renderPosts = () => {
    return data.map(post => 

    <li key={post.id}>
        <Link href={`/portfolios/${post.id}`}>
            <a>
                {post.title}
            </a>
        </Link>
    </li>
    
    )
  }

  return (
    <BaseLayout>
      <BasePage>
        <h1>I am portfolios page</h1>
        { loading &&
          <p>Loading data...</p>
        }
        { data &&
          <ul>
          {renderPosts()}
          </ul> 
        }
        { error &&
          <div className="alert alert-danger">{error.message}</div>
        }   
      </BasePage>
    </BaseLayout>
  )
}
    
export default Portfolios;