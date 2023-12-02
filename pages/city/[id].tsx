inport { useRouter } from next/router;

const cityPage: React.FC = () => {
    const router = useRouter;
    const { id } = router.query;
    return <div>City page content for ID: {id}</div>
}



export default cityPage;