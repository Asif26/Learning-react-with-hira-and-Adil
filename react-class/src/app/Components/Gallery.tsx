import Profile from "./Profiles"
export default function Gallery(){
    return(
      <div>
      <h1>Amazing Scientist</h1>
      
      <div className="flex">
      <Profile />
      <Profile />
      <Profile />
      </div>
      </div>
  )
  }