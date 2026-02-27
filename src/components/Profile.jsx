import "./Profile.css"

function Profile({username = "Username", role = "Administrator"}){
    return (
    
    <div className="user-profile">
        
        <img src="https://cdn.vectorstock.com/i/500p/77/30/default-avatar-profile-icon-grey-photo-placeholder-vector-17317730.jpg" alt="" className="user-avatar"/>
        <div className="user-info">
            <p className="user-username">{username}</p>
            <p className="user-userole">{role}</p>
        </div>
    </div>
    )
}

export default Profile;