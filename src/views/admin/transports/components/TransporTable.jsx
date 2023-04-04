import Card from "components/card";
import axios from "axios";
import React from "react";

const client = axios.create({

  baseURL: "http://localhost/api/manifestations" ,
  headers: { 
    'Content-Type': 'application/json',
    'accept': 'application/json'
   }
});

function TransportTable() {

  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    async function getPost() {
      const response = await client.get("/1");
      console.log();
      setPost(response.data);
    }
    getPost();
  }, []);
  
  if (!post) return "No post!";

  return (
    <Card extra={"h-[600px] w-full"}>

        <div className="flex h-fit w-full items-center justify-between rounded-t-2xl bg-white px-4 pt-4 pb-[20px] shadow-2xl shadow-gray-100 dark:!bg-navy-700 dark:shadow-none">
            <h4 className="text-lg font-bold text-navy-700 dark:text-white">
            Liste des Manifs
            </h4>
            <button className="linear rounded-[20px] bg-lightPrimary px-4 py-2 text-base font-medium text-brand-500 transition duration-200 hover:bg-gray-100 active:bg-gray-200 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 dark:active:bg-white/20">
            Ajouter une nouvelle
            </button>
        </div>

        <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">

                <div className="overflow-hidden ">

                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                    <tr>
                        <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                        Id
                        </th>
                        <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                        Nom
                        </th>
                        <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                        Date de début
                        </th>
                        <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                        Date de Fin
                        </th>
                        <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                        Lieu
                        </th>

                        <th scope="col" className="relative px-6 py-3">
                        <span className="sr-only">Voir</span>
                        </th>
                    </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">

                    {/* {people.map(person => ( ))} */}

                    <tr key={post.id}>

                      <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{post.id}</div>
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap">

                          {/* <div className="text-sm font-medium text-gray-900">{post.title}</div> */}
                          <div className="text-sm font-medium text-gray-900">{post.denomination}</div>
                          
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500">{post.dateDebut}</div>
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500">{post.dateFin}</div>
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {post.lieu}
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <a href="#" className="text-indigo-600 hover:text-indigo-900">
                          Voir
                          </a>
                      </td>
                    </tr>

                    </tbody>
                </table>
                </div>
            </div>
            </div>
        </div>
    </Card>
  );
}

export default TransportTable;
