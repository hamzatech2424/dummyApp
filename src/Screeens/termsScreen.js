import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import HeadingOne from '../Components/DocumentComponents/headingOne'
import NormalText from '../Components/DocumentComponents/normalText'
import BoldText from '../Components/DocumentComponents/boldText'
import ItalicText from '../Components/DocumentComponents/italicText'
import BulletPoint from '../Components/DocumentComponents/bulletPoint'

const TermsScreen = () => {
    return (
        <SafeAreaView style={styles.mainContainer}>
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.documentView}>
                    <View style={{ alignItems: 'center' }}>
                        <HeadingOne>INFORIDE® TERMS OF USE</HeadingOne>
                    </View>

                    <View style={{ paddingTop: 20, marginBottom: 10 }}>
                        <HeadingOne>LAST UPDATED: March 23, 2022</HeadingOne>
                    </View>

                    <View>
                        <NormalText>
                            By accessing or downloading the InfoRide Mobile Application (the <BoldText>"InfoRide App"</BoldText>), visiting the InfoRide website located at https://www.inforide.app/ (the <BoldText>“Website”</BoldText>) or accessing the InfoRide SaaS Platform available to authorized Dealerships (the <BoldText>"Platform"</BoldText> ) (collectively referred to herein as the <BoldText>“Services”</BoldText>), you acknowledge and agree that you understand that you are registering an account with Worth Advertising Group, Inc. ( <BoldText>"Worth Advertising Group" “we" “our” </BoldText>or<BoldText>“us”</BoldText>) and not with any affiliated companies of Worth Advertising Group, Inc., or with any vehicle dealerships.
                        </NormalText>
                    </View>

                    <View style={{ paddingVertical: 10 }}>
                        <BoldText>
                            BY USING OUR SERVICES, YOU ARE AGREEING TO THE FOLLOWING TERMS AND CONDITIONS. THESE TERMS OF USE CONSTITUTE A LEGAL, BINDING AGREEMENT BETWEEN YOU AND WORTH ADVERTISING GROUP AND AFFECT YOUR LEGAL RIGHTS AGAINST WORTH ADVERTISING GROUP, THUS, YOU SHOULD READ THESE TERMS OF USE CAREFULLY IN THEIR ENTIRETY BEFORE ACCEPTING THEM.
                        </BoldText>
                    </View>

                    <View style={{ paddingBottom: 10 }}>
                        <BoldText>
                            USE OF THE SERVICES AND ACCEPTANCE OF TERMS:
                        </BoldText>
                    </View>

                    <View>
                        <NormalText>
                            {`Please carefully review these terms of use of the Services (the “Terms of Use”)  and our Privacy Policy (as described below) before using the InfoRide App, Website, Platform, or any of our other related services. These Terms of Use contain important information regarding your legal rights, remedies and obligations.
                             
If you do not agree to these Terms of Use, or if you do not agree with our Privacy Policy, please do not use the any of our Services. Worth Advertising Group does not knowingly collect information from minors and minors are not permitted to use the Services.

From time to time, we may update these Terms of Use. For significant changes, we will notify you by posting a prominent notice on our Website indicating at the top of the Terms of Use when it was most recently updated.  As such, we encourage you to please check the Terms of Use periodically for material changes. You agree to be bound by all the provisions of these Terms of Use that are displayed on the Website on the date you use the Services. Your continued use of any of the Services indicates your acceptance of all of the provisions of the Terms of Use that are displayed on the Website on the date of such use.
                             `}
                        </NormalText>
                    </View>

                    <View style={{ paddingBottom: 10 }}>
                        <BoldText>
                            DESCRIPTION OF THE SERVICES:
                        </BoldText>
                    </View>


                    <View>
                        <NormalText>
                            {`Worth Advertising Group provides an online vehicle listing site, where individuals seeking to purchase vehicles `}(<BoldText>“Buyers”</BoldText>) and dealerships seeking to sell vehicles can connect with one another. Individuals seeking to purchase a vehicle can register a Buyer Account through the InfoRide App that will provide access to various vehicle listings posted by dealerships that have been approved as authorized Dealerships. If a Buyer finds a vehicle they are interested in purchasing, they can submit an offer on the vehicle (<BoldText>“Offer”</BoldText>). If the Offer is accepted by the Dealership, the Buyer will be charged a non-refundable Fifty Dollar ($50.00) Acceptance Fee by Worth Advertising Group. Upon acceptance of the Offer the Buyer and Dealership will be able to utilize the InfoRide App and Platform chat feature to connect directly together to complete the vehicle purchase. Once the Buyer and Dealership connect virtually through the chat, it is up to the Buyer and Dealership to complete the vehicle purchase and sale.
                        </NormalText>
                    </View>

                    <View style={{ paddingTop: 10 }}>
                        <NormalText>
                            {`As a Buyer, you understand that Worth Advertising Group does not control the price or any other terms of sale related to the vehicle purchase. These are strictly within the control of the Dealership of the applicable vehicle. You further understand and agree that Worth Advertising Group as a neutral facilitator of the vehicle purchase process has no control over the truth, accuracy, quality, legality, or safety of postings made by Dealerships. You understand and agree that Worth Advertising Group cannot and does not confirm or verify the identity, background, qualifications, or abilities of Dealerships, nor does Worth Advertising Group guaranty the condition and/or quality of the vehicles, or accuracy of the Vehicle Data that are posted by Dealerships and offered up for sale through the Services.`}
                        </NormalText>
                    </View>

                    <View style={{ paddingVertical: 10 }}>
                        <BoldText>
                            ACCOUNTS:
                        </BoldText>
                    </View>

                    <View>
                        <BoldText>
                            Types of Users; Eligibility; Registration Required
                        </BoldText>
                        <NormalText>
                            We offer accounts for two types of purposes: personal buyer accounts and approved dealership business accounts. Your account is a personal Buyer Account, unless you have entered into a separate written agreement with us.
                        </NormalText>
                    </View>

                    <View style={{ paddingTop: 10 }}>
                        <ItalicText>
                            Dealerships
                        </ItalicText>
                        <NormalText>Worth Advertising Group may make available certain features, tools and functionality available on the Platform, that permit certain users registered as authorized representatives (<BoldText>“End User(s)”</BoldText>) of authorized dealerships (<BoldText>“Dealership(s)”</BoldText>) to upload vehicle information, including but not limited to the vehicle condition, mileage, features, year, VIN, specifications and photographs unique to the inventory controlled by the Dealership (<BoldText>“Vehicle Data”</BoldText>). All use of the Services by End Users and Dealerships shall be further governed by the terms and conditions set forth in the SaaS Agreement entered into by and between Worth Advertising Group and the Dealership, which is hereby incorporated by reference (<BoldText>“SaaS Agreement”</BoldText>), when applicable.</NormalText>
                    </View>

                    <View style={{ paddingTop: 10 }}>
                        <ItalicText>
                            Buyers
                        </ItalicText>
                        <NormalText>In order to participate in certain of the Services offered by Worth Advertising Group on the InfoRide Mobile App, such as placing an Offer on a vehicle, accessing Vehicle Data, or communicating with a Dealership through the chat feature (hereinafter, collectively the <BoldText>“Buyer Services”</BoldText>) Buyers are required to register Buyer Accounts (defined below). Access to the Buyer Services without registration is strictly prohibited. In order to register a Buyer Account, Buyers will be required to provide a credit card. </NormalText>
                    </View>

                    <View style={{ paddingTop: 10 }}>
                        <NormalText>Buyer Accounts are limited to those persons who are eighteen (18) years of age or older (or otherwise legally permitted contract in their jurisdiction) and have the legal capacity to enter into a legally binding contract and who reside in the United States. You agree to be financially responsible for all of your use of your Buyer Account as well as for use of your Buyer Account by others, including without limitation minors living with you. In addition to the foregoing, state-specific identification requirements, credit requirements and/or other applicable laws, regulations and restrictions may apply with respect to Buyer’s vehicle purchasing eligibility, about which Worth Advertising Group has no involvement with. </NormalText>
                    </View>

                    <View style={{ paddingTop: 10 }}>
                        <BoldText>Registration Process and Procedures</BoldText>
                        <NormalText>By registering with us, you represent and warrant that all information you provide on the registration form is current, complete and accurate to the best of your knowledge. You agree to maintain and promptly update your registration information so that it remains current, complete and accurate. During the registration process, you may be required to choose a password. You acknowledge and agree that we may rely on this password to identify you. You are responsible for all use of your account, regardless of whether you authorized such access or use, and for ensuring that all use of your account complies fully with the provisions of these Terms of Use.</NormalText>
                    </View>


                    <View style={{ paddingTop: 10 }}>
                        <ItalicText>
                            Dealership Accounts
                        </ItalicText>
                        <NormalText>End Users, acting on behalf of authorized Dealerships, will be given the opportunity to register an account through the Platform, (hereinafter your <BoldText>“Dealership Account”</BoldText>), through which you may create vehicle listings and upload Vehicle Data related to vehicles in Dealership’s inventory and connect directly with Buyers. We will use the information you provide during registration in accordance with our Privacy Policy. Dealership Accounts shall be further governed by the terms and conditions set forth in the SaaS Agreement entered into by and between Worth Advertising Group and the Dealership.</NormalText>
                    </View>


                    <View style={{ paddingTop: 10 }}>
                        <ItalicText>
                            Buyer Accounts
                        </ItalicText>
                        <NormalText>Should you meet the foregoing eligibility criteria for creating a Buyer Account and agree with these Terms of Use you will be given the opportunity to register an account through the InfoRide Mobile App, so as to create a Buyer Account (hereinafter your <BoldText>“Buyer Account”</BoldText>), through which you may receive information from us and participate in the features of the Services, such as making Offers on vehicles and connecting directly with Dealerships. We will use the information you provide during registration in accordance with our Privacy Policy.</NormalText>
                    </View>

                    <View style={{ paddingVertical: 10 }}>
                        <BoldText>FEES; OFFERS; PAYMENT; SALES POLICIES:</BoldText>
                    </View>

                    <View style={{ paddingTop: 10 }}>
                        <BoldText>Dealership Account Fees</BoldText>
                        <NormalText>Dealerships shall be charged in accordance with the terms and conditions set forth in the SaaS Agreement entered into by and between Worth Advertising Group and the Dealership.</NormalText>
                    </View>

                    <View style={{ paddingTop: 10 }}>
                        <BoldText>Buyer Account Fees</BoldText>
                        <NormalText>The fees and the terms of payment for the Buyer Accounts are displayed at the time of Buyer Account registration, including at the time when the Buyer uploads their credit card information and authorizes a hold and again when Buyer chooses to make an Offer. All fees are displayed in U.S. Dollars (USD) and are subject to change at our sole and exclusive discretion without notice thereof.</NormalText>
                    </View>

                    <View style={{ paddingTop: 10 }}>
                        <BoldText>Acceptance Fee Payments</BoldText>
                        <NormalText>In order to submit an Offer on a vehicle you, will need to have provided your credit card information, during the Buyer Account registration process to create a digital wallet with our third party payment processor. By providing your credit card information you understand and acknowledge that you will be charged a fee of Fifty Dollars ($50.00) if your vehicle Offer is accepted. You will be immediately charged an acceptance fee in the amount of Fifty Dollars ($50.00), upon the acceptance of your Offer by a Dealership (<BoldText>“Acceptance Fee”</BoldText>). If you place multiple Offers on multiple vehicles, you will be charged a Fifty Dollar ($50.00) Acceptance Fee for each Offer accepted. You acknowledge that Worth Advertising Group or its third party payment processing provider may require additional documentation from you in connection with its creation of your digital wallet, the processing of any Acceptance Fee(s), and/or its fraud prevention and security measures program before it approves any credit card hold, deposit or charge made by you. </NormalText>
                    </View>

                    <View style={{ paddingTop: 10 }}>
                        <BoldText>Offer Acceptance</BoldText>
                        <NormalText> As a Buyer, you are obligated from the time you submit your Offer to complete any purchase for which your Offer is accepted by a Dealership. Once an Offer has been accepted, it cannot be retracted, deleted or canceled for any reason whatsoever, therefore, Buyers should exercise caution when placing Offers. Should your Offer be accepted by a Dealership and you default on your obligation to proceed with the purchase of the vehicle, you unconditionally acknowledge and agree that your Acceptance Fee will be automatically forfeited to Worth Advertising Group, and such Acceptance Fee shall become the sole and lawful property and possession of Worth Advertising Group, and shall not be refundable.</NormalText>
                        <View style={{ paddingTop: 10 }}>
                            <NormalText>If you submit an Offer on a vehicle and the Dealership accepts such Offer you are unconditionally obligated to complete the transaction, which includes, without limitation, making full and final payment of the Offer made. Worth Advertising Group is not and shall not be responsible for any cancelled offers. Worth Advertising Group reserves the right to reject or void offers for any reason whatsoever, in its sole and absolute discretion. Worth Advertising Group reserves the right to review the chat log communications between Buyer and Dealership. You acknowledge and agree that, as the Buyer, you are responsible for all vehicles purchased by you through the Services. Anything you purchase through the Services is solely at your risk.</NormalText>
                        </View>
                    </View>

                    <View style={{ paddingTop: 10 }}>
                        <BoldText>Offer Rejection</BoldText>
                        <NormalText>Dealerships have the right to reject or void Offers, for any reason, in their sole and absolute discretion. Should a dispute arise regarding an Offer made between a Buyer and a Dealership, Worth Advertising Group is the exclusive deciding authority with sole and absolute discretion in resolving disputes. Buyers and Dealership agree to indemnify, defend, and hold  Worth Advertising Group harmless from any and all liability arising out of or in connection with any Offers, and/or any decisions made in resolving disputes. Worth Advertising Group may, by its sole and absolute discretion and with or without notice, postpone or cancel a sale or withdraw a vehicle from the Services. Worth Advertising Group will neither have liability nor obligation to you as a result of any vehicle withdrawal, cancellation or postponement.</NormalText>
                    </View>


                    <View style={{ paddingTop: 10 }}>
                        <BoldText>Vehicle Posting Withdraw; Cancellation</BoldText>
                        <NormalText>Dealerships, have the right to withdraw a vehicle posting from the Services, with or without notice, at any time. Neither Worth Advertising Group nor Dealership will have liability or obligation to Buyer as a result of any vehicle posting withdrawal. Further, Worth Advertising Group reserves the right to cancel or reverse an Offer or acceptance of an Offer, in the event of fraud, material misrepresentation, or patent defect in the Vehicle Data information or Offer information, as determined by Worth Advertising Group at its sole discretion. In the event Worth Advertising Group cancels a sale (due to no fault of Buyer) after the Buyer has remitted payment of the Acceptance Fee, Worth Advertising Group will credit the amount of the Acceptance Fee to the Buyer. Worth Advertising Group reserves the right to review the chat communications between Buyer and Dealership End Users in order to facilitate any such determinations.</NormalText>
                    </View>

                    <View style={{ paddingTop: 10 }}>
                        <BoldText>Refunds and Remedies</BoldText>
                        <NormalText>If the Buyer or Dealership fails to go through with the vehicle purchase, for any reason after Buyer’s Offer was accepted, Worth Advertising Group shall be held harmless against any and all related claims, demands, lawsuits and judgments arising there-from, whether arising from Buyer or Dealership. In the event the vehicle purchase falls through, through no fault of Buyer, after Buyer has paid the Acceptance Fee, Buyer’s sole remedy from Worth Advertising Group, shall be to seek a refund of the Acceptance Fee for the particular vehicle at issue. </NormalText>
                    </View>

                    <View style={{ paddingTop: 10 }}>
                        <BoldText>VEHICLE PURCHASE:</BoldText>
                        <NormalText>Once your Offer is accepted by a Dealership, you will be able to connect directly with the Dealership through the InfoRide App and Platform chat feature. Buyer and Dealership are encouraged to use the chat feature to share details necessary to proceed with the vehicle purchase. Buyer is solely responsible for paying the entire amount due on their purchase, including any applicable taxes, shipping and other charges directly to Dealership. Worth Advertising Group is not involved in the sale of the vehicle. </NormalText>
                    </View>

                    <View style={{ paddingVertical: 10 }}>
                        <BoldText>ACCURACY, COMPLETENESS AND TIMELINESS OF INFORMATION:</BoldText>
                    </View>

                    <View >
                        <NormalText>The Vehicle Data, descriptions, Vehicle History Reports (defined below), pictures and other representations of products displayed through the Services may contain inaccuracies and/or errors (including, without limitation, the title status of the vehicle, the general status of the vehicle, the mileage and anything else related thereto). Worth Advertising Group and its affiliates do not make (or attempt to make) any guaranty, warranty or representation with respect to the accuracy or completeness of any such information. Prior to placing an Offer on a vehicle you should ascertain, confirm, research, inspect, and/or investigate vehicles and any and all information regarding the type, title, condition, damage, mileage, status, history of vehicles. Buyer is solely responsible for verifying all Vehicle History Reports and Vehicle Data and other information displayed by Dealerships or other third party Content providers.</NormalText>
                    </View>

                    <View style={{ paddingVertical: 10 }}>
                        <NormalText>We are not responsible if any information, Vehicle History Reports or Vehicle Data made available on the Services is not accurate, complete or current. You acknowledge that the Services are provided for general information only and should not be relied upon or used as the sole basis for making a purchase decision without consulting primary, more accurate, more complete or more timely sources of information, including but not limited to the Dealership. You acknowledge and agree that no Vehicle Data, Vehicle History Reports, advice or information, whether oral or written, obtained from us, or through the Services, shall create any warranty not expressly stated herein. You expressly acknowledge that Worth Advertising Group serves as an intermediary to connect the Buyer and Dealership. Buyer is solely responsible for confirming with Dealership all Vehicle Data information displayed through the Services, directly with Dealership. </NormalText>
                    </View>

                    <View style={{ paddingBottom: 10 }}>
                        <NormalText>Buyer acknowledges that prices and availability of products and the descriptions of which are provided on the InfoRide App may change without notice to Buyer at any time. </NormalText>
                    </View>

                    <View>
                        <BoldText>Vehicle History Reports</BoldText>
                        <NormalText>The vehicle history reports or any excerpts thereof (<BoldText>“Vehicle History Reports”</BoldText>) which you may obtain or access through the Services are provided by third party providers. These third party providers are not part of nor related to Worth Advertising Group in any way. As a result, Worth Advertising Group cannot in any way verify the accuracy of the Vehicle History Reports and does not warrant or guaranty the accuracy of the Vehicle History Reports and accepts no liability if the Vehicle History Report has any errors or omissions. Further, Worth Advertising Group disclaims all warranties, expressed or implied, including any implied warranties of merchantability or fitness for a particular purpose in connection with these Vehicle History Reports. Worth Advertising Group does not guarantee nor assure your access to the Vehicle History Reports, does not attest to the validity or accuracy of any information or data found in a Vehicle History Report and shall not be liable for any delay or failure to make available any Vehicle History Reports</NormalText>
                    </View>

                    <View style={{ paddingVertical: 10 }}>
                        <BoldText>POSTINGS AND SUBMISSIONS:</BoldText>
                    </View>

                    <View>
                        <NormalText>All personally identifiable information, content, designs, ideas, graphics, data or other information that you send to us, post, upload or otherwise make available through the Services (together, the <BoldText>“Postings and Submissions”</BoldText>), is and remains your property. Worth Advertising Group’s practices relating to the use and protection of any personally identifiable information provided to Worth Advertising Group through the Services are detailed in Worth Advertising Group’s Privacy Policy. You consent to Worth Advertising Group’s collection, use, storage and transmission of such Submissions, including any personally identifiable information for Worth Advertising Group’s Business Purposes (as defined in our Privacy Policy) and activities. By sending, commenting, reviewing, uploading, posting or otherwise making available any Postings and Submissions, you represent and warrant that you have rights as owner of the Postings and Submissions to grant and do hereby grant to Worth Advertising Group a perpetual, royalty-free, fully-paid up, non-exclusive right and license to use, reproduce, modify, publish, distribute, perform, display, store, disclose consistent with the terms of the Privacy Policy, and transmit the Postings and Submissions through the Services, for any and all commercial and non-commercial purposes. You acknowledge that you are responsible for all Postings and Submissions that you submit, and you, not Worth Advertising Group, have full responsibility for the Postings and Submissions, including their legality, reliability, appropriateness, originality, and/or copyright.</NormalText>
                    </View>

                    <View style={{ paddingVertical: 10 }}>
                        <NormalText>Any Postings and Submissions posted to the Services will be deemed NOT CONFIDENTIAL. By posting a Posting or Submission, you warrant and represent that you own or otherwise control all of the rights to your Postings and Submissions as described in these Terms of Use including, without limitation, all the rights necessary for you to provide, post, upload, input or submit your Postings and Submissions.</NormalText>
                    </View>

                    <View>
                        <NormalText>In addition to the warranty and representation set forth above, by posting a Posting or Submission, you warrant and represent that: (i) you are the copyright owner of your Posting and Submission or you have the permission of the copyright owner; and (ii) you have all rights necessary to grant the license described in these Terms of Use. You acknowledge that Worth Advertising Group is not responsible for the accuracy of any Postings and Submissions. All Postings and Submissions, whether publicly posted or privately transmitted, are the sole responsibility of the persons from whom such Postings and Submissions originated. This means that you, and not Worth Advertising Group, are entirely responsible for all Postings and Submissions that you post to the Services.</NormalText>
                    </View>

                    <View style={{ paddingVertical: 10 }}>
                        <BoldText>OBLIGATIONS OF SERVICE USERS:</BoldText>
                    </View>

                    <View>
                        <NormalText>You agree not to do any of the following while visiting or using the Services: </NormalText>
                    </View>

                    <View>
                        <BulletPoint>
                            restrict or inhibit any other user from using and enjoying the Services;
                        </BulletPoint>
                        <BulletPoint>
                            impersonate any person or entity or falsely state or otherwise misrepresent your professional or other affiliation with any person or entity or indicate that you are an employee or representative of Worth Advertising Group;
                        </BulletPoint>
                        <BulletPoint>
                            post or transmit unlawful, offensive, threatening, abusive, libelous, defamatory, obscene, vulgar, pornographic, profane or indecent information of any kind, including, without limitation, any images or other material depicting nudity;
                        </BulletPoint>
                        <BulletPoint>
                            post or transmit comments containing harassing or offensive language or engage in disruptive activities online;
                        </BulletPoint>
                        <BulletPoint>
                            post or transmit any information or software which contains a virus, Trojan horse, worm or other harmful component;
                        </BulletPoint>
                        <BulletPoint>
                            post or transmit any unsolicited advertising, promotional materials, “junk mail,” “spam,” “chain letters” or any other form of solicitation on the Services or through the Services;
                        </BulletPoint>
                        <BulletPoint>
                            post, upload or transmit any material that is fraudulent or violates or infringes the rights of others, including material that violates privacy or publicity rights, or infringes copyright, trademark or other intellectual property and/or proprietary rights;
                        </BulletPoint>
                        <BulletPoint>
                            post or transmit material that encourages or provides instructional information about illegal activities, in particular hacking, cracking or distribution of counterfeit software;
                        </BulletPoint>
                        <BulletPoint>
                            solicit other users to join or contribute money to any online service or other organization, advocate or attempt to get users to join in illegal schemes or plan or participate in scams involving other users;
                        </BulletPoint>
                        <BulletPoint>
                            violate any applicable law or regulation, including without limitation any local, state, provincial, national or international law, any export control laws, or any regulations promulgated by any state or federal authority;
                        </BulletPoint>
                        <BulletPoint>
                            access or use password protected, secure or non-public areas of the Services without authorization;
                        </BulletPoint>
                        <BulletPoint>
                            frame, repackage, or otherwise redistribute any portion of the Services; or
                        </BulletPoint>
                        <BulletPoint>
                            use the Services to collect personally identifying information about users of the Services, or conduct any activity in violation of the Worth Advertising Group’s Privacy Policy or InfoRide App end user license agreement (“EULA”), the terms of which are hereby incorporated by reference.
                        </BulletPoint>
                    </View>

                    <View style={{ paddingVertical: 10 }}>
                        <NormalText>Worth Advertising Group may terminate or suspend your access to the Services at any time for any reason or no reason, including, but not limited to, as a result of your violation or threatened violation of any of the obligations described above, in Worth Advertising Group’s sole and absolute discretion.  Worth Advertising Group will not be liable to you or any third party as a result of such termination or suspension. The terms and conditions provided in these Terms of Use will survive any such termination.</NormalText>
                    </View>

                    <View style={{ paddingBottom: 10 }}>
                        <BoldText>INTELLECTUAL PROPERTY, RESTRICTIONS ON USE; THIRD PARTY WEBSITES AND DOWNLOADABLE MATERIALS:</BoldText>
                    </View>

                    <View>
                        <NormalText>You acknowledge that the Services, and any underlying technology used in connection with the Services and all software, materials, data, designs, content, information, graphics, photographs, animations, audio, video, Vehicle Data, Vehicle History Reports and other data (the “Content”) available on the Services or through the Services provided by Worth Advertising Group, its licensors or approved third-party providers constitute copyrighted works, intellectual property or proprietary information or data of such parties. All trademarks, service marks, and logos referenced or appearing on the Services are the property of Worth Advertising Group or their respective owners. The Content displayed through the Services, may not be used, copied, downloaded, republished, reproduced, adapted, modified, distributed, licensed, sold, transferred, transmitted, broadcasted or otherwise exploited without Worth Advertising Group’s prior express written permission, or as specifically authorized in these Terms of Use. Modification of the Content for any purpose may violate Worth Advertising Group or its licensor’s intellectual property or other proprietary rights. The Content on the Services is provided for lawful purposes only.</NormalText>
                    </View>

                    <View style={{ paddingVertical: 10 }}>
                        <NormalText>This Services may contain downloadable materials and links to external sites.  Worth Advertising Group is not responsible for, and has no control over, the Content of any such third party owned downloadable materials or external sites. You understand that Worth Advertising Group cannot and does not guarantee or warrant that files, Content or software of any kind, from any source, that are available for downloading through the Services or through third party websites linked to the Services, will be free of errors, inaccuracies, infection, viruses, worms, Trojan horses or other code or defects that contain or incorporate contaminating or destructive properties. Links to other websites do not imply an endorsement of the materials, products, content, or ideas  displayed on, or disseminated at or through those websites, nor does the existence of a link to Worth Advertising Group’s Services imply that the organization or person publishing at that website endorses any of the materials or ideas at the Services. Worth Advertising Group reserves the right to disable links from third-party websites to any of Worth Advertising Group’s websites at any time without prior notice.</NormalText>
                    </View>

                    <View>
                        <BoldText>PRIVACY POLICY:</BoldText>
                    </View>

                    <View style={{ paddingTop: 10 }}>
                        <NormalText>Our policies concerning the use of your personal information are set forth in our privacy policy available at:  [INSERT URL to Privacy Policy] (<BoldText>“Privacy Policy”</BoldText>), the terms of which are incorporated herein by this reference.  Please carefully review the information contained in the Privacy Policy.  By using the Services you agree to waive and release Worth Advertising Group from any claim or liability in connection with the collection, use, or disclosure of information that is consistent with the terms of the Privacy Policy.</NormalText>
                    </View>

                    <View style={{ paddingVertical: 10 }}>
                        <BoldText>INDEMNIFICATION:</BoldText>
                    </View>

                    <View>
                        <NormalText>You irrevocably covenant, promise, and agree to indemnify, defend, and hold harmless Worth Advertising Group from and against all actual and threatened third party claims, actions, damages, and losses of every kind arising in connection with any act or omission taken by you in connection with your use of the Services, or your acts or omissions that otherwise constitute negligent or willful acts, or are in violation of applicable law, as well as all other claims resulting from your use of the Services. You will further defend, indemnify and hold Worth Advertising Group harmless from and against any and all actual or threatened claims, damages, liabilities, costs and expenses (including reasonable attorneys' fees) arising from or relating to your breach these Terms of Use, or other performance or non-performance of your obligations hereunder or from acts or omissions of any third parties to which you provides access to the Services. In the event that you access or use the Services in a manner not permitted under these Terms of Use, then you shall additionally defend, indemnify and hold Worth Advertising Group harmless from and against any and all actual or threatened claims, damages, liabilities, costs and expenses (including reasonable attorneys' fees) arising from any claim of defamation, intellectual property infringement or violation of publicity rights brought against Worth Advertising Group by any third party that the Services, as used in combination with other products or services beyond those provided or the Services otherwise misused by you, infringes upon such third party’s intellectual property rights or other rights. For any legal action taken against Worth Advertising Group for actions of you that violate these Terms of Use, you will bear all costs (legal or otherwise).</NormalText>
                    </View>

                    <View style={{ paddingVertical: 10 }}>
                        <NormalText>YOU SHALL DEFEND, INDEMNIFY, AND HOLD HARMLESS WORTH ADVERTISING GROUP FROM ANY AGAINST ANY THIRD PARTY CLAIMS OR LOSSES (INCLUDING COSTS, EXPENSES AND ATTORNEY FEES) ASSERTED AGAINST WORTH ADVERTISING GROUP ARISING DIRECTLY OR INDIRECTLY FROM YOUR USE OF OR RELIANCE ON ANY VEHICLE HISTORY REPORT, VEHICLE DATA, CONTENT OR MATERIALS DISPLAYED THROUGH THE SERVICES.</NormalText>
                    </View>

                    <View style={{ paddingBottom: 10 }}>
                        <BoldText>TERMINATION AND SUSPENSION OF SERVICES:</BoldText>
                    </View>

                    <View>
                        <NormalText>You may discontinue your participation in and access to the Services at any time, by deleting the InfoRide App from your Device and discontinuing all use of the Services. However, your right to terminate the Services, does not provide you the right to retract or cancel an Offer that has already been accepted. You acknowledge and agree that Worth Advertising Group may terminate or block your use of all or part of the Services, without prior notice and for any reason or no reason at all.  You agree that upon termination or discontinuance for any reason, Worth Advertising Group may delete all information related to you on the Services and may bar your access to the Services.</NormalText>
                    </View>

                    <View style={{ paddingVertical: 10 }}>
                        <BoldText>SECURITY MEASURES:</BoldText>
                    </View>

                    <View>
                        <NormalText>Worth Advertising Group has taken reasonable and appropriate steps and has employed industry-standard practices and technology to ensure the integrity and confidentiality of personally identifiable information; but because even the most secure computer system can be violated, Worth Advertising Group cannot guarantee absolute security.</NormalText>
                    </View>

                    <View style={{ paddingVertical: 10 }}>
                        <NormalText>IMPORTANT: Please keep in mind that whenever you voluntarily disclose information about yourself in the public domain, it is likely to be collected and used by third parties. These third parties may use your information to contact you or for unauthorized purposes. Also, please remember that no one can guarantee the absolute security of information transmitted electronically.</NormalText>
                    </View>

                    <View style={{ paddingBottom: 10 }}>
                        <BoldText>DISCLAIMER OF REPRESENTATIONS AND WARRANTIES: </BoldText>
                    </View>

                    <View>
                        <NormalText>WORTH ADVERTISING GROUP MAKES NO REPRESENTATIONS OR WARRANTIES WITH RESPECT TO THE VEHICLES DISPLAYED ON OR THROUGH THE SERVICES. BUYER SHALL LOOK TO THE DEALERSHIP FOR ANY AND ALL WARRANTIES WITH RESPECT TO THE VEHICLES LISTED THROUGH THE SERVICES. THE SERVICES, VEHICLE HISTORY REPORTS, VEHICLE DATA, CONTENT AND MATERIAL DISPLAYED THROUGH THE SERVICES MAY INCLUDE ERRORS, INACCURACIES, OMISSIONS OR TYPOGRAPHICAL ERRORS. WORTH ADVERTISING GROUP MAY MAKE CHANGES TO THE SERVICES AT ANY TIME. THE SERVICES, VEHICLE HISTORY REPORTS, VEHICLE DATA, CONTENT AND MATERIALS DISPLAYED THROUGH THE SERVICES ARE PROVIDED ON AN “AS IS” AND “AS AVAILABLE” BASIS.  WORTH ADVERTISING GROUP MAKES NO WARRANTY THAT THE SERVICES WILL ALWAYS BE AVAILABLE FOR USE.  TO THE MAXIMUM EXTENT PERMITTED BY LAW, WORTH ADVERTISING GROUP EXPRESSLY DISCLAIMS ALL WARRANTIES OF ANY KIND WITH RESPECT TO THE SERVICES AND ALL VEHICLE HISTORY REPORTS,  VEHICLE DATA, MATERIAL AND CONTENT OFFERED THROUGH THE SERVICES, WHETHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ALL WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE OR NON-INFRINGEMENT. </NormalText>
                    </View>

                    <View style={{ paddingVertical: 10 }}>
                        <NormalText>WORTH ADVERTISING GROUP DOES NOT WARRANT THAT THE SERVICES, THE FUNCTIONS CONTAINED ON THE SERVICES, OR THE VEHICLE HISTORY REPORTS, VEHICLE DATA, MATERIALS OR CONTENT DISPLAYED THROUGH THE SERVICES WILL BE UNINTERRUPTED, TIMELY, SECURE OR ERROR-FREE, THAT DEFECTS WILL BE CORRECTED, THAT MESSAGES OR REQUESTS WILL BE DELIVERED OR RECEIVED, OR THAT THE SERVICES OR THE VEHICLE HISTORY REPORTS, VEHICLE DATA, MATERIALS OR CONTENT DISPLAYED THROUGH THE SERVICES OR THE SERVER THAT MAKES THEM AVAILABLE ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS. YOU ARE RESPONSIBLE FOR ENSURING THAT YOU HAVE IMPLEMENTED PROCEDURES TO PREVENT SUCH CONTAMINATING COMPONENTS FROM INFECTING YOUR COMPUTER AND ITS DATA. WORTH ADVERTISING GROUP DOES NOT WARRANT OR MAKE ANY REPRESENTATIONS REGARDING THE USE OF, OR THE RESULT OF THE USE OF THE SERVICES OR THE VEHICLE HISTORY REPORTS, VEHICLE DATA, MATERIALS OR CONTENT DISPLAYED THROUGH THE SERVICES RELATED TO THEIR CORRECTNESS, ACCURACY, RELIABILITY, OR OTHERWISE. TO THE EXTENT THAT APPLICABLE LAW MAY NOT ALLOW THE EXCLUSION OF IMPLIED WARRANTIES, THE ABOVE EXCLUSIONS MAY NOT APPLY TO YOU. </NormalText>
                    </View>

                    <View>
                        <NormalText>IT IS THE SOLE RESPONSIBILITY OF BUYER TO ASCERTAIN, CONFIRM, RESEARCH, INSPECT AND/OR INVESTIGATE VEHICLES AND ANY AND ALL VEHICLE HISTORY REPORTS AND VEHICLE DATA PRIOR TO MAKING AN OFFER ON A VEHICLE</NormalText>
                    </View>

                    <View style={{ paddingVertical: 10 }}>
                        <BoldText>LIMITATION OF LIABILITY:</BoldText>
                    </View>

                    <View>
                        <NormalText>TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT WILL WORTH ADVERTISING GROUP BE LIABLE FOR ANY DAMAGES WHATSOEVER, INCLUDING BUT NOT LIMITED TO DIRECT, INDIRECT, INCIDENTAL, SPECIAL, PUNITIVE, AND/OR CONSEQUENTIAL DAMAGES (INCLUDING WITHOUT LIMITATION THOSE RESULTING FROM LOST PROFITS, LOST DATA, STOLEN INFORMATION, BUSINESS INTERRUPTION, BODILY INJURY OR DEATH) ARISING OUT OF THE USE, INABILITY TO USE, OR THE RESULTS OF USE OF THE SERVICES, ANY WEBSITES LINKED TO THE SERVICES, THE VEHICLE DATA, VEHICLE HISTORY REPORTS, MATERIALS, CONTENT OR INFORMATION CONTAINED ON ANY OR ALL SUCH SITES, OR THE VEHICLE DATA, VEHICLE HISTORY REPORTS, MATERIALS, CONTENT, OR SERVICES OFFERED THROUGH THE SERVICES, WHETHER BASED ON WARRANTY, CONTRACT, TORT OR ANY OTHER LEGAL THEORY AND WHETHER OR NOT ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.  IN NO EVENT WILL WORTH ADVERTISING GROUP, OR ANY OTHER PARTY INVOLVED IN CREATING, PRODUCING, OR DELIVERING THE SERVICES OR ANY MATERIALS, VEHICLE DATA, VEHICLE HISTORY REPORTS OR CONTENT OFFERED THROUGH THE SERVICES BE LIABLE TO YOU IN ANY MANNER WHATSOEVER FOR ANY ACTION OR NON-ACTION TAKEN BY YOU IN RELIANCE UPON INFORMATION PROVIDED THROUGH THE SERVICES. </NormalText>
                    </View>

                    <View style={{ paddingVertical: 10 }}>
                        <NormalText>TO THE EXTENT THAT APPLICABLE LAW MAY NOT ALLOW THE EXCLUSION OF INCIDENTAL OR CONSEQUENTIAL DAMAGES THE ABOVE EXCLUSION MAY NOT APPLY TO YOU.  WORTH ADVERTISING GROUP’S TOTAL LIABILITY TO YOU FOR ALL LOSSES, DAMAGES, AND CAUSES OF ACTION RELATED TO THE SERVICES, THE MATERIALS, VEHICLE DATA, VEHICLE HISTORY REPORTS, AND CONTENT DISPLAYED THROUGH THE SERVICES OR YOUR ACCESS OR USE OF THE SERVICES OR THE VEHICLE DATA, VEHICLE HISTORY REPORTS, MATERIALS AND CONTENT OFFERED THROUGH THE SERVICES WILL NOT BE GREATER THAN THE AMOUNT PAID BY YOU TO WORTH ADVERTISING GROUP, RELATING TO THE TRANSACTION OR VEHICLE GIVING RISE TO THE LIABILITY. IF NO SUCH FEES WERE PAID BY YOU TO WORTH ADVERTISING GROUP, WORTH ADVERTISING GROUPS TOTAL LIABILITY TO YOU OR ANY THIRD-PARTY (WHETHER JOINTLY, SEVERALLY, OR INDIVIDUALLY) FOR ANY CLAIM SHALL NOT EXCEED $500 USD.</NormalText>
                    </View>

                    <View>
                        <NormalText>IMPORTANT: Worth Advertising Group merely provides a service to connect Buyers and Dealerships as such Worth Advertising Group cannot (and does not) guaranty, verify, inspect and/or warrant any of the vehicles, Vehicle Data, the Vehicle History Reports nor the information about the vehicles and/or the services, which are displayed through the Services by third parties.</NormalText>
                    </View>

                    <View style={{ paddingVertical: 10 }}>
                        <BoldText>DMCA AGENT POLICY:</BoldText>
                    </View>

                    <View>
                        <NormalText>We respect the intellectual property rights of others, and require that the people who use the Services do the same. If you believe that your work appears on the Services and has been copied in a way that constitutes copyright infringement, please forward the following information to the Copyright Agent named below: (i) your address, telephone number, and email address; (ii) a description of the copyrighted work that you claim has been infringed; (iii) a description of where the alleged infringing material is located; (iv) a statement by you that you have a good faith belief that the disputed use is not authorized by you, the copyright owner, its agent, or the law; (v) an electronic or physical signature of the person authorized to act on behalf of the owner of the copyright interest; and (vi) a statement by you, made under penalty of perjury, that the above information contained in your notice is accurate and that you are the copyright owner or are authorized to act on the copyright owner's behalf. </NormalText>
                    </View>

                    <View>
                        <NormalText>Copyright Agent: </NormalText>
                    </View>

                    <View>
                        <NormalText>{` 
                      Evan Worth
                      Worth Advertising Group
                      625 W. University Avenue
                      Gainesville, Florida 32601`}
                        </NormalText>
                        <View style={{ flexDirection: 'row' }}>
                            <BoldText>{`                         Telephone Number:`}</BoldText>
                            <NormalText>352-519-5852</NormalText>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <BoldText>{`                         Email address:`}</BoldText>
                            <NormalText style={{ textDecorationLine:'underline'}} >Worth@worthadv.com</NormalText>
                        </View>
                    </View>

                    <View style={{ paddingVertical: 10 }}>
                        <BoldText>INJUNCTIVE RELIEF:</BoldText>
                    </View>

                    <View>
                        <NormalText>You agree that in the event of a breach by you of any provision of these Terms of Use, Worth Advertising Group shall be entitled to seek and obtain injunctive or other equitable relief, or both, in each case without the requirement to post any bond or other form of security, and without such act constituting an election of remedies or disentitling Worth Advertising Group to each and every remedy available at law or in equity for a breach of this Agreement by you. </NormalText>
                    </View>

                    <View style={{ paddingVertical: 10 }}>
                        <BoldText>GOVERNING LAW; JURISDICTION AND VENUE:</BoldText>
                    </View>

                    <View>
                        <NormalText>These Terms of Use will be governed and interpreted in accordance with the laws of the State of Florida, United States of America, notwithstanding any principles of conflicts of law.  If any party institutes a lawsuit or other action or proceeding pertaining to these Terms of Use, any right or obligation of any party hereunder, or any breach of these Terms of Use, then the sole and exclusive venue and jurisdiction for filing and maintaining any such lawsuit or other action or proceeding shall be in the Courts sitting in Alachua County, Florida or the U.S. Northern District of Florida and each party waives the right to institute or maintain any such suit, action or proceeding in any other courts or forums whatsoever. By using the Services, you consent and submit yourself to the personal jurisdiction of such court.</NormalText>
                    </View>

                    <View style={{ paddingVertical: 10 }}>
                        <BoldText>SEVERABILITY; WAIVER:</BoldText>
                    </View>

                    <View>
                        <NormalText>If any provision of these Terms of Use are found by a court of competent jurisdiction to be void, invalid, unenforceable or otherwise contrary to law or equity, the remaining provisions of these Terms of Use that can be given effect without such void or unenforceable term or provision, shall be given full effect and binding on the parties. Worth Advertising Group’s failure to enforce strict performance of any provision of these Terms of Use, or to penalize any violation of these Terms of Use, does not constitute a waiver of future violations. </NormalText>
                    </View>

                    <View style={{ paddingVertical: 10 }}>
                        <BoldText>ENTIRE AGREEMENT:</BoldText>
                    </View>

                    <View>
                        <NormalText>These Terms of Use and all agreements and policies incorporated by reference, constitute the entire agreement between you and Worth Advertising Group with respect to the Services and supersede all prior or contemporaneous understandings and agreements, whether written or oral, with respect to the Services.</NormalText>
                    </View>



                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default TermsScreen

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    },
    documentView: {
        width: '90%',
        alignSelf: 'center',
        height: '100%',
    }
})