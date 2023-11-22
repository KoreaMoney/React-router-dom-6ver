import { useOutletContext } from 'react-router-dom';

interface IfollowersContext {
    nameOfMyUser: string;
}

const Followers = () => {
    const { nameOfMyUser } = useOutletContext<IfollowersContext>();

    return <h1>Here are {nameOfMyUser}의 followers</h1>;
};

export default Followers;
