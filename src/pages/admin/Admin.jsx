import "./Admin.css"


export default function Admin() {
  return (
    <div className={"admin"}>
      <nav className={"adminNavigation"}>
        <h1>Admin</h1>
        <ul>
          <li>Users</li>
          <li>Companies</li>
        </ul>
      </nav>
      <main className="adminMain">
        <h1>Users</h1>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Email</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Phone Number</th>
              <th>Date Of Birth</th>
              <th>Roles</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>chuck@norris.com</td>
              <td>Chuck</td>
              <td>Norris</td>
              <td>123-456-7890</td>
              <td>03/10/1940</td>
              <td>Admin</td>
              <td><button>edit</button></td>
            </tr>
            <tr>
              <td>2</td>
              <td>chuck@norris.com</td>
              <td>Chuck</td>
              <td>Norris</td>
              <td>123-456-7890</td>
              <td>03/10/1940</td>
              <td>Admin</td>
              <td><button>edit</button></td>
            </tr>
          </tbody>
        </table>
      </main>
    </div>
  )
}