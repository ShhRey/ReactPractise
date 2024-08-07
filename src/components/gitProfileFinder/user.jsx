import "./styles.css";

// Create Custom Component to be used as Card and fetch data from Fetched User via API
export default function GitHubUser({user}) {
    // Filter out the specific details to be displayed onto our Card from the entire object returned through API
    const { avatar_url, bio, location, created_at, html_url, name, login, public_repos, followers, following } = user;
    const createdDate = new Date(created_at);
    console.log(avatar_url);

    return (
        <div className="userCard">
            <div className="user-header">
                <img src={avatar_url} alt="User Avatar" className="avatar" />
                <a className="user-name" href={ html_url !== null ? html_url : (`https://www.github.com/${login}`) }>{ name !== null ? name : login }</a>
            </div>
            <div className="user-location">From: {location}</div>
            <div className="user-jd"><p>Member Since: {`${createdDate.toLocaleString('en-us', {month: 'short'})} ${createdDate.getFullYear()}`}</p></div>
            <div className="user-bio">{bio}</div>
            <div className="user-stats">
                <p>Followers: {followers}</p>
                <p>Following: {following}</p>
                <p>Public Repositories: {public_repos}</p>
            </div>
        </div>
    )
}