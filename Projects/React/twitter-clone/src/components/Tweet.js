import './App.css';
import './Tweet.css';
import Logo from './Logo.js';

function Tweet(props) {
    console.log(props)
    return (
      <div className="tweet">
        <div className="tweet-header">
			<div className="left">
				<div className="profile-header">
					<div className="icon" style={ {background: "#004c3f"} }>
						<a href="#">
							{ props.realname.charAt(0) }
						</a>
					</div>
					<div className="profile-text">
						<h3>
							<a href="#">
								{ props.realname }
							</a>
						</h3>
						<p className="username">
							@{ props.username }
						</p>
					</div>
				</div>
				<p>{ props.content }</p>
		  </div>
		  <div className="right">
          		<Logo size="30"/>
		  </div>
        </div>
		<div className="tweet-footer">
			<h6>{ props.time }</h6>
			<hr />
			<h6> 
				<a href="#">
					<span className="like"> 
						&#128420; { props.likes } 
					</span>
				</a>
				<a href="#">
					<span className="comment">
						&#128488; { props.comments } 
					</span>
				</a>
				<a href="#">
					<span className="link">
						&#128279; Copy link to Tweet 
					</span>
				</a>
			</h6>
		</div>
      </div>
    );
  }

  export default Tweet;