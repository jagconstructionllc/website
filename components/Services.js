import Link from 'next/link';
import Image from 'next/image';

export default function Services() {

    return(

        <div className="max-w-4xl mx-auto px-5 m-16">

            <div className="text-center">
                <h2 className="font-semibold text-3xl text-gray-900">Services for progress</h2>
                <p className="max-w-md mx-auto mt-2 text-gray-500">Explore our offerings to see how our customized approach transforms challenges into opportunities.</p>
            </div>


            <div className="grid md:grid-cols-2 gap-10 mt-10">


                <div className="flex gap-4 items-start">
                    <span className="text-green-600 bg-green-500/10 p-3 rounded-full">
                    <svg width="15" height="15" viewBox="0 0 256 252" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
                        <path d="M59.406,88.486L50.54,60.801h50.68L90.352,88.486H59.406z M20.567,146.773
                                c0-21.393,11.841-39.869,29.63-49.078h50.737c17.789,9.209,29.973,27.685,29.973,49.078c0,30.316-24.711,55.027-55.027,55.027
                                C45.22,201.801,20.567,177.09,20.567,146.773z M80.857,159.987c0,3.26-2.974,4.919-7.265,4.919c-4.976,0-9.553-1.659-12.87-3.318
                                l-2.288,8.866c2.917,1.659,7.894,2.974,13.156,3.318v7.264h7.551v-7.894c8.923-1.316,13.843-7.265,13.843-14.186
                                c0-6.921-3.661-11.154-12.87-14.472c-6.578-2.288-9.209-3.947-9.209-6.578c0-2.002,1.659-4.29,6.578-4.29
                                c5.606,0,9.209,1.659,11.211,2.631l2.288-8.58c-2.631-1.316-5.949-2.288-11.211-2.631v-6.921h-7.551v7.207
                                c-8.237,1.659-13.156,6.921-13.156,13.843c0,7.608,5.606,11.555,13.843,14.186C78.511,155.354,81.143,157.012,80.857,159.987z
                                M198.608,91.221c-1.756-1.828-1.698-4.734,0.13-6.491s4.734-1.698,6.491,0.13s1.698,4.734-0.13,6.491
                                S200.364,93.049,198.608,91.221z M229.263,82.637c1.828-1.756,1.887-4.662,0.13-6.491s-4.662-1.887-6.491-0.13
                                c-1.828,1.756-1.887,4.662-0.13,6.491S227.434,84.394,229.263,82.637z M171.883,56.775c1.828-1.756,1.887-4.662,0.13-6.491
                                c-1.756-1.828-4.662-1.887-6.491-0.13s-1.887,4.662-0.13,6.491S170.055,58.532,171.883,56.775z M239.094,60.108
                                c1.828-1.756,1.887-4.662,0.13-6.491s-4.662-1.887-6.491-0.13s-1.887,4.662-0.13,6.491C234.36,61.806,237.266,61.864,239.094,60.108
                                z M204.274,24.598c1.828-1.756,1.887-4.662,0.13-6.491c-1.756-1.828-4.662-1.887-6.491-0.13s-1.887,4.662-0.13,6.491
                                C199.54,26.296,202.445,26.354,204.274,24.598z M229.857,35.032c1.828-1.756,1.887-4.662,0.13-6.491
                                c-1.756-1.828-4.662-1.887-6.491-0.13s-1.887,4.662-0.13,6.491C225.123,36.73,228.029,36.788,229.857,35.032z M182.436,34.261
                                c1.828-1.756,1.887-4.662,0.13-6.491c-1.756-1.828-4.662-1.887-6.491-0.13s-1.887,4.662-0.13,6.491S180.607,36.017,182.436,34.261z
                                M190.179,61.832l-16.368,15.724l-1.58,6.822l6.88-1.305l16.368-15.724c4.637,2.618,10.782,2.02,15.012-2.044
                                c5.15-4.947,5.309-12.88,0.362-18.03s-12.88-5.309-18.03-0.362C188.593,50.978,187.573,56.91,190.179,61.832z M253.968,54.72
                                c0,21.672-13.201,40.348-31.968,48.417V119h-15.232v88.777c0,17.087-13.772,30.858-30.859,30.858h-26.12v11.181H2V215h148v13.484
                                l26.675-0.05c11.476,0,20.657-9.181,20.657-20.657V119H182v-15.814c-18.828-8.041-32.083-26.75-32.083-48.466
                                c0-29.073,23.463-52.536,52.536-52.536C231.271,2.184,254.989,25.646,253.968,54.72z M241.747,34.102
                                c-11.375-21.68-38.232-30.052-59.912-18.677c-21.68,11.375-30.052,38.232-18.677,59.912c11.375,21.68,38.232,30.052,59.912,18.677
                                C244.75,82.639,253.122,55.782,241.747,34.102z" fill="currentColor" fillRule="evenodd" clipRule="evenodd">
                        </path>
                    </svg>
                    </span>
                    <div>
                        <h3 className="font-semibold text-xl">Detailed Construction Estimating</h3>
                        <p className="mt-1 text-gray-500"> Leverage advanced technology and veteran expertise to create precise, comprehensive cost estimates that keep projects on budget from inception through completion.</p>
                    </div>
                </div>


                <div className="flex gap-4 items-start">
                    <span className="text-green-600 bg-green-500/10 p-3 rounded-full">
                    <svg width="15" height="15" viewBox="0 2 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
                        <path d="M41,20V58a1,1,0,0,1-1,1H14a1,1,0,0,1-1-1V14a1,1,0,0,1,1-1H29V11H14a3,3,0,0,0-3,3V58a3,3,0,0,0,3,3H40a3,3,0,0,0,3-3V20Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd">
                        </path>
                        <path d="M48,3H36a5,5,0,0,0-5,5V22a1,1,0,0,0,.54.89A1.07,1.07,0,0,0,32,23a1,1,0,0,0,.58-.19L39.32,18H48a5,5,0,0,0,5-5V8A5,5,0,0,0,48,3ZM38,12a1,1,0,1,1,1-1A1,1,0,0,1,38,12Zm4,0a1,1,0,1,1,1-1A1,1,0,0,1,42,12Zm4,0a1,1,0,1,1,1-1A1,1,0,0,1,46,12Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd">
                        </path>
                        <path d="M37.71,38.65l-4.4-4.4a4,4,0,0,0-5.56-5.56l-4.18-4.18a1,1,0,0,0-1.42,0,11,11,0,0,0-.77,14.7l-2.5,2.5A3,3,0,0,0,18,43.83V56h2V43.83a1.05,1.05,0,0,1,.29-.71l2.49-2.48a11,11,0,0,0,14.93-.57A1,1,0,0,0,37.71,38.65Zm-7.78,2.64a9,9,0,0,1-7-14.62L27,30.78a1.05,1.05,0,0,0,.82.25,1.07,1.07,0,0,0,.77-.44,2,2,0,0,1,2.82,0,2,2,0,0,1-.06,2.89,1,1,0,0,0-.42.73,1.05,1.05,0,0,0,.29.79l4.33,4.32A8.91,8.91,0,0,1,29.93,41.29Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd">
                        </path>
                    </svg>
                    </span>
                    <div>
                        <h3 className="font-semibold text-xl">Pre-Construction Planning & Consulting</h3>
                        <p className="mt-1 text-gray-500"> Collaborate with clients to develop strategic work plans, secure permits, and design project specifications, laying the foundation for a smooth construction process.</p>
                    </div>
                </div>


                <div className="flex gap-4 items-start">
                    <span className="text-green-600 bg-green-500/10 p-3 rounded-full">
                    <svg width="15" height="15" viewBox="0 0 496 496" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
                        <path d="M472,128V0h-96v128h-2.848l-38.656-85.056L282.352,1.232l-10.64,63.824L299.688,128H272v48h16v24H40
                                c-22.056,0-40,17.944-40,40v168c0,22.056,17.944,40,40,40h88v32H96v16h176v-16h-32v-32h88c22.056,0,40-17.944,40-40v-40h88
                                c13.232,0,24-10.768,24-24V176h16v-48H472z M392,16h64v16h-16v16h16v16h-32v16h32v16h-16v16h16v16h-64V16z M293.648,30.76
                                l24.928,19.952l-29.912,9.968L293.648,30.76z M293.984,75.768l32.864-10.952L355.576,128H317.2L293.984,75.768z M224,480h-80v-32
                                h80V480z M328,432H40c-13.232,0-24-10.768-24-24h336C352,421.232,341.232,432,328,432z M352,392H16V240c0-13.232,10.768-24,24-24
                                h248v128c0,13.232,10.768,24,24,24h40V392z M464,312h-16v16h16v16c0,4.416-3.584,8-8,8H312c-4.416,0-8-3.584-8-8v-16h128v-16H304
                                V176h160V312z M480,160H288v-16h192V160z" fill="currentColor" fillRule="evenodd" clipRule="evenodd">
                        </path>
                        <path d="M144,176c48.52,0,88-39.48,88-88S192.52,0,144,0S56,39.48,56,88S95.48,176,144,176z M144,16c39.704,0,72,32.296,72,72
				                s-32.296,72-72,72s-72-32.296-72-72S104.296,16,144,16z" fill="currentColor" fillRule="evenodd" clipRule="evenodd">
                        </path>
                        <path d="M152,112h-16c-4.416,0-8-3.584-8-8h-16c0,13.232,10.768,24,24,24v16h16v-16c13.232,0,24-10.768,24-24s-10.768-24-24-24
                                h-16c-4.416,0-8-3.584-8-8s3.584-8,8-8h16c4.416,0,8,3.584,8,8h16c0-13.232-10.768-24-24-24V32h-16v16c-13.232,0-24,10.768-24,24
                                s10.768,24,24,24h16c4.416,0,8,3.584,8,8S156.416,112,152,112z" fill="currentColor" fillRule="evenodd" clipRule="evenodd">
                        </path>
                        <path d="M32,376h240V232H32V376z M48,248h208v112H48V248z" fill="currentColor" fillRule="evenodd" clipRule="evenodd">
                        </path>
                        <path d="M199.8,304c-2.032-22.392-20.888-40-43.8-40c-16.528,0-31.512,9.464-38.96,24H99.72l-34.376,51.56l13.312,8.872
                                L108.28,304h31.44l29.624,44.44l13.312-8.872L169.616,320H204l21.6,28.8l12.8-9.592L212,304H199.8z M158.944,304l-10.664-16
                                h-11.704c5.104-5.008,12.024-8,19.424-8c14.064,0,25.632,10.464,27.592,24H158.944z" fill="currentColor" fillRule="evenodd" clipRule="evenodd">
                        </path>
                    </svg>
                    </span>
                    <div>
                        <h3 className="font-semibold text-xl">Project Management & Controls</h3>
                        <p className="mt-1 text-gray-500">Oversee every phase of your project—from schedule planning and cost monitoring to change management and risk assessment—to ensure timely, efficient execution.</p>
                    </div>
                </div>


                <div className="flex gap-4 items-start">
                    <span className="text-green-600 bg-green-500/10 p-3 rounded-full">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
                        <path d="M4.5 2C3.11929 2 2 3.11929 2 4.5C2 5.88072 3.11929 7 4.5 7C5.88072 7 7 5.88072 7 4.5C7 3.11929 5.88072 2 4.5 2ZM3 4.5C3 3.67157 3.67157 3 4.5 3C5.32843 3 6 3.67157 6 4.5C6 5.32843 5.32843 6 4.5 6C3.67157 6 3 5.32843 3 4.5ZM10.5 2C9.11929 2 8 3.11929 8 4.5C8 5.88072 9.11929 7 10.5 7C11.8807 7 13 5.88072 13 4.5C13 3.11929 11.8807 2 10.5 2ZM9 4.5C9 3.67157 9.67157 3 10.5 3C11.3284 3 12 3.67157 12 4.5C12 5.32843 11.3284 6 10.5 6C9.67157 6 9 5.32843 9 4.5ZM2 10.5C2 9.11929 3.11929 8 4.5 8C5.88072 8 7 9.11929 7 10.5C7 11.8807 5.88072 13 4.5 13C3.11929 13 2 11.8807 2 10.5ZM4.5 9C3.67157 9 3 9.67157 3 10.5C3 11.3284 3.67157 12 4.5 12C5.32843 12 6 11.3284 6 10.5C6 9.67157 5.32843 9 4.5 9ZM10.5 8C9.11929 8 8 9.11929 8 10.5C8 11.8807 9.11929 13 10.5 13C11.8807 13 13 11.8807 13 10.5C13 9.11929 11.8807 8 10.5 8ZM9 10.5C9 9.67157 9.67157 9 10.5 9C11.3284 9 12 9.67157 12 10.5C12 11.3284 11.3284 12 10.5 12C9.67157 12 9 11.3284 9 10.5Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd">
                        </path>
                    </svg>
                    </span>
                    <div>
                        <h3 className="font-semibold text-xl">Procurement & Vendor Coordination</h3>
                        <p className="mt-1 text-gray-500">Assist in selecting and managing contractors, vendors, and joint venture partners, ensuring high-quality resources and seamless integration into your project.</p>
                    </div>
                </div>


                <div className="flex gap-4 items-start">
                    <span className="text-green-600 bg-green-500/10 p-3 rounded-full">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
                        <path d="M5 9H4V8h1zm-1 2h1v-1H4zm0 8h1v-1H4zm0 2h1v-1H4zM2.734 2.734A2.497 2.497 0 1 1 2.002 4.5a2.49 2.49 0 0 1 .732-1.766zM3 4.5a1.502 1.502 0 1 0 .44-1.06A1.495 1.495 0 0 0 3 4.5zm19.266 12.234a2.543 2.543 0 1 1-2.926-.434l-.962-3.315A2.478 2.478 0 0 1 16.053 11H13.95A2.5 2.5 0 0 1 12 12.95v4.103a2.497 2.497 0 1 1-1 0V12.95a2.495 2.495 0 0 1-1.268-.682c-.037-.038-.066-.083-.101-.123l-2.768 1.581a2.46 2.46 0 1 1-.597-.992c.038.037.066.083.101.123l2.768-1.582A2.494 2.494 0 1 1 13.95 10h2.103A2.498 2.498 0 0 1 18.5 8.002a2.457 2.457 0 0 1 .295.03l.46-1.376A2.494 2.494 0 0 1 20.5 2a2.504 2.504 0 0 1 1.763 4.267 2.293 2.293 0 0 1-2.06.703l-.458 1.377a2.479 2.479 0 0 1-.37 4.484l.927 3.191c.066-.005.13-.02.198-.02a2.49 2.49 0 0 1 1.766.732zM20.5 6a1.502 1.502 0 1 0-1.06-.44A1.495 1.495 0 0 0 20.5 6zM5.56 13.44A1.498 1.498 0 1 0 6 14.5a1.496 1.496 0 0 0-.44-1.06zM11.5 18a1.502 1.502 0 1 0 1.06.44A1.496 1.496 0 0 0 11.5 18zm1.5-7.5a1.502 1.502 0 1 0-.44 1.06A1.495 1.495 0 0 0 13 10.5zm5.5 1.5a1.502 1.502 0 1 0-1.06-.44 1.495 1.495 0 0 0 1.06.44zm3.5 6.5a1.502 1.502 0 1 0-.44 1.06A1.495 1.495 0 0 0 22 18.5z" fill="currentColor" fillRule="evenodd" clipRule="evenodd">
                        </path>
                    </svg>
                    </span>
                    <div>
                        <h3 className="font-semibold text-xl">Energy & Utility Infrastructure Projects</h3>
                        <p className="mt-1 text-gray-500">Apply extensive industry experience to manage large-scale energy, heavy civil, and utility projects, addressing complex challenges with precision and efficiency.</p>
                    </div>
                </div>


                <div className="flex gap-4 items-start">
                    <span className="text-green-600 bg-green-500/10 p-3 rounded-full">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
                        <path d="M12,24C5.4,24,0,18.6,0,12S5.4,0,12,0s12,5.4,12,12S18.6,24,12,24z M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10s10-4.5,10-10
                            S17.5,2,12,2z M13,18h-2V9.4l-3.3,3.3l-1.4-1.4L12,5.6l5.7,5.7l-1.4,1.4L13,9.4V18z" fill="currentColor" fillRule="evenodd" clipRule="evenodd">
                        </path>
                    </svg>
                    </span>
                    <div>
                        <h3 className="font-semibold text-xl">Facilities Upgrades & Retrofitting</h3>
                        <p className="mt-1 text-gray-500">Specialize in modernizing operating petroleum, chemical, and industrial facilities by integrating new technologies and systems while minimizing disruptions.</p>
                    </div>
                </div>

                <div className="flex gap-4 items-start">
                    <span className="text-green-600 bg-green-500/10 p-3 rounded-full">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
                        <path d="M24,22H5v-2h17V10H5V8h19V22z M19,16H0V2h19v2H2v10h17V16z" fill="currentColor" fillRule="evenodd" clipRule="evenodd">
                        </path>
                    </svg>
                    </span>
                    <div>
                        <h3 className="font-semibold text-xl">Integrated Project Delivery</h3>
                        <p className="mt-1 text-gray-500">Foster collaboration among client staff, subcontractors, and partners, ensuring every project benefits from shared expertise and a unified approach to problem-solving.</p>
                    </div>
                </div>

                <div className="flex gap-4 items-start">
                    <span className="text-green-600 bg-green-500/10 p-3 rounded-full">
                    <svg width="15" height="15" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
                        <path d="M387.757,135.208c-11.352-12.443-24.62-23.507-39.707-32.706c-38.988-23.776-83.463-31.118-125.296-24.006
                                c-3.704,0.63-7.386,1.38-11.043,2.235c-4.924,1.151-9.801,2.499-14.616,4.054c-23.779,7.675-46.053,20.225-65.169,37.24
                                c-13.116,11.674-24.749,25.442-34.353,41.191c-3.522,5.776-6.671,11.675-9.478,17.665c-38.896,82.99-9.828,184.016,70.193,232.811
                                c1.129,0.688,2.269,1.336,3.408,1.997c26.154,15.191,54.623,23.134,83.032,24.403c2.715,0.121,5.43,0.205,8.142,0.205
                                c16.26,0,32.418-2.194,48.03-6.43c10.6-2.876,20.946-6.694,30.897-11.437c0.669-0.319,1.335-0.649,2-0.976
                                c30.004-14.749,56.309-37.88,74.968-68.477c10.851-17.795,18.269-36.733,22.462-56.04
                                C443.699,239.525,427.569,178.847,387.757,135.208z M180.524,334.187l9.616,56.197c-4.507-2.158-8.931-4.551-13.255-7.187
                                c-64.901-39.576-88.116-121.887-55.602-188.935l42.723,24.451c14.025,8.026,21.067,24.577,17.123,40.249
                                c-1.038,4.127,0.087,8.438,3.012,11.531l1.332,1.409c12.892,13.632,13.137,35.216,0.556,49.139l-2.489,2.755
                                C180.979,326.632,179.879,330.42,180.524,334.187z M169.361,172.174c-1.797,1.011-3.81,1.53-5.839,1.53
                                c-0.973,0-1.948-0.119-2.905-0.36l-22.695-5.711c24.638-31.438,60.347-50.495,98.122-54.982l-5.199,20.661
                                c-0.797,3.167-2.86,5.869-5.707,7.47L169.361,172.174z M287.686,400.498c-18.086,4.383-36.468,5.286-54.368,2.845l-2.727-16.645
                                c-0.876-5.349,1.969-10.615,6.924-12.811l11.474-5.085c19.035-8.437,41.273-2.016,52.877,15.272l6.126,9.128l1.151,0.333
                                C302.24,396.371,295.075,398.706,287.686,400.498z M392.565,303.262l-7.593-7.268c-5.068-4.851-11.709-7.399-18.734-7.175
                                c-7.012,0.224-13.488,3.192-18.237,8.356c-7.394,8.043-17.397,13.494-28.166,15.347l-29.958,5.155
                                c-1.973,0.339-3.954,0.507-5.921,0.507c-8.155,0-16.09-2.871-22.422-8.235c-7.861-6.658-12.338-16.385-12.284-26.686l0.139-26.968
                                c0.03-5.627-1.817-11.202-5.199-15.699l-15.554-20.686c-2.951-3.923-3.19-9.255-0.604-13.427l24.575-39.656
                                c2.084-3.364,5.705-5.472,9.659-5.626l56.926-2.209l18.698-20.434C390.733,175.959,411.983,243.332,392.565,303.262z" fill="currentColor" fillRule="evenodd" clipRule="evenodd">
                        </path>
                        <path d="M440.425,68.991l-4.521,4.884C387.68,26.236,323.802,0,256,0C193.842,0,133.905,22.553,87.231,63.503
                                C31.795,112.145,0,182.307,0,256c0,9.864,7.997,17.86,17.86,17.86c9.864,0,17.86-7.997,17.86-17.86
                                c0-63.411,27.361-123.786,75.069-165.645C150.945,55.123,202.515,35.721,256,35.721c58.419,0,113.453,22.633,154.967,63.727
                                c0.223,0.22,0.461,0.413,0.692,0.619l-5.301,5.727c-6.694,7.232-1.116,18.93,8.717,18.278l32.894-2.177
                                c5.586-0.369,9.984-4.912,10.173-10.506l1.173-34.627C459.657,66.674,447.282,61.583,440.425,68.991z" fill="currentColor" fillRule="evenodd" clipRule="evenodd">
                        </path>
                        <path d="M494.14,238.14c-9.864,0-17.86,7.997-17.86,17.86c0,54.043-19.761,106.017-55.641,146.35
                                C378.841,449.334,318.833,476.279,256,476.279c-53.481,0-105.048-19.4-145.202-54.627c-0.652-0.572-1.343-1.068-2.049-1.529
                                l4.52-4.883c1.192-1.288,1.988-2.72,2.448-4.196c2.117-6.813-3.084-14.618-11.165-14.084l-17.784,1.176l-15.11,1
                                c-5.586,0.369-9.984,4.912-10.173,10.506l-1.173,34.627c-0.342,10.09,12.033,15.181,18.89,7.773l5.646-6.1
                                c0.701,0.912,1.497,1.773,2.395,2.56C133.913,489.451,193.847,512,256,512c73.022,0,142.758-31.312,191.326-85.906
                                C489.031,379.212,512,318.807,512,256C512,246.136,504.003,238.14,494.14,238.14z" fill="currentColor" fillRule="evenodd" clipRule="evenodd">
                        </path>
                    </svg>
                    </span>
                    <div>
                        <h3 className="font-semibold text-xl">Sustainable Construction & Environmental Solutions</h3>
                        <p className="mt-1 text-gray-500">Implement eco-friendly practices and energy-efficient systems that meet modern environmental standards while delivering robust, future-ready infrastructure.</p>
                    </div>
                </div>

            </div>
        </div>

    );
};