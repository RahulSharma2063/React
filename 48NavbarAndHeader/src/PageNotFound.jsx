import { Link } from "react-router-dom"



export default function PageNotFound(){
    return(
        <div style={{textAlign: 'center'}}>
            <h1>Page not Found</h1>
            <h2>404 ERROR</h2>
            <div>
                <Link to="/">Go to Home Page</Link>
            </div>
            <img src="https://static.vecteezy.com/system/resources/thumbnails/008/568/878/small/website-page-not-found-error-404-oops-worried-robot-character-peeking-out-of-outer-space-site-crash-on-technical-work-web-design-template-with-chatbot-mascot-cartoon-online-bot-assistance-failure-vector.jpg" alt="" />
        </div>
    )
}