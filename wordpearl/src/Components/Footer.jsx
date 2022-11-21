import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer-container">
            <footer>
                <div className="footer-content">
                    <h3>Word<span>Pearl</span></h3>
                    <p>A Pearl is a poem with a particular set of rules, for a poem to be a Pearl it needs to have an equal number of each letter used in the poem. You will not be able to use numbers or special characters in the text field. You will have a Pearl when there are no Odd Letters displayed. Good Luck!</p>
                    <ul className="footer-list">
                        <li>return to top</li>
                        <li>contact us</li>
                        <li>about us</li>
                        <li>privacy policy</li>
                    </ul>
                </div>
            </footer>
        </div>
    )
}

export default Footer