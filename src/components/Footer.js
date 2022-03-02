import React from "react";
import vkLogo from '../images/vk-logo.png'
import gitHubLogo from '../images/github-logo.png'
import linkedInLogo from '../images/linkedin-logo.png'


export default function Footer() {
    return (
        <footer>
            <ul>
                <li><a href="https://linkedin.com/in/maxim-solovev-588266230" target={'_blank'} rel="noreferrer"><img src={linkedInLogo} alt="linkedin logo" width={25}
                                                                          height={25}/></a>
                </li>
                <li><a href="https://vk.com/maxim_solovev" target={'_blank'} rel="noreferrer"><img src={vkLogo} alt="vk logo" width={30} height={30}/></a>
                </li>
                <li><a href="https://github.com/Solovechik" target={'_blank'} rel="noreferrer"><img src={gitHubLogo} alt="github logo" width={25}
                                                                        height={25}/></a>
                </li>
            </ul>
        </footer>
    )
}