import { useEffect, useState } from "react"
import Spinner from "../layouts/Spinner"

const UserResults = () => {
    const [users, setUsers] = useState([])
    const [isLoading, setIsloading] = useState(true)

    useEffect(() => {
        fetchUsers()

    }, [])

    const fetchUsers = async () => {
        const response = await fetch("https://api.github.com/users")
        const data = await response.json()
        setUsers(data)
        setIsloading(false)
    }

    if (!isLoading) {
        return (
            <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
                {users.map((user) => <h3>{user.login}</h3>)}
            </div>)
    } else return <Spinner />
}

export default UserResults