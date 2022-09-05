/// FIRST LESSON - REACT children ///

// import React from "react";
// import CTA from "./CTA.jsx";

// export default function App() {
//     return (
//         <div>
//             <CTA>
//                 <h1>This is an important CTA</h1>
//                 <button>Click me now or you'll miss out!</button>
//             </CTA>
//             <br></br>
//             <CTA>
//                 <form>
//                     <input type="email" placeholder="Enter your email address"/>
//                     <button>Submit</button>
//                 </form>
//             </CTA>
//         </div>
//     )
// }

/// END OF FIRST LESSON - REACT children ///


/// SECOND LESSON - REACT children CHALLENGE ///

import React from "react";
import InfoCallout from "./InfoCallout.jsx";
import ImageCallout from "./ImageCallout.jsx";
import EmailCallout from "./EmailCallout.jsx";
import Callout from "./Callout.jsx";

function App() {
    return (
        <main>
            <h1>Welcome!</h1>
            {/* <InfoCallout
                header="Don't miss out!"
                body="Unless you suffer from FOMO, you better make sure you fill out the email below!"
            /> */}
            <Callout>
                <h2>Don't miss out!</h2>
                <p>Unless you suffer from FOMO, you better make sure you fill out the email below!</p>
            </Callout>
            <p>This is probably the best site you've ever come across. I'm glad you're here to witness the magnificence of his website right now.</p>
            {/* <ImageCallout
                img={"https://picsum.photos/id/102/4320/3240"}
                caption="Just look at those sparkling raspberries!"
            /> */}
            <Callout>
                <img src="https://picsum.photos/id/102/4320/3240" width="100%"/>
                <figcaption>Just look at those sparkling raspberries!</figcaption>
            </Callout>
            <p>Here's some more unforgettable content. Lorem ipsum something or other.</p>
            {/* <EmailCallout
                header="Give us your email. We definitely won't sell it to anyone."
                btnText="Sign me up!"
            /> */}
            <Callout>
                <h1>Give us your email. We definitely won't sell it to anyone.</h1>
                <input type="email" placeholder="Enter email"/>
                <button>Sign me up!</button>
            </Callout>
        </main>
    )
};
export default App;

/// SECOND LESSON - REACT children CHALLENGE ///