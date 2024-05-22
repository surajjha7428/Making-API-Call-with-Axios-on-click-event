function Post({ Name, email, avatar }) {
  return (
    <div className="post">
      <img src={avatar} alt={`${Name}'s avatar`} />
      <h2>{Name}</h2>
      <p>{email}</p>
    </div>
  );
}

export default Post;
