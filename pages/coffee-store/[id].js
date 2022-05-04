import { useRouter } from "next/router"

const coffeeStore = () => {
    const router = useRouter()
    console.log(router)
    return <div>Coffee Store Page {router.query.id}</div>;
}

export default coffeeStore;