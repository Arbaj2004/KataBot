
import CustomizedProgressBars from "../components/StepProgressbar";
import CircularDeterminate from "../components/Circleprogressbar";
import ProgressBar from "../components/ProgressBar";
import StackBars from "../components/Bargraph.jsx";
import styles from "./styles.module.css";


const Admin = () => {
    return ( 
        <>
        <div className={styles.maindiv}>
            <div className={styles.rightblock}>
                <div className={styles.mainContent}>
                    <div className={styles.mainName}>
                        <div className={styles.bigName}>
                            <h1 className={styles.heading}>Dashboard</h1>
                        </div>
                        <div className={styles.desc}>
                            <h4 className={styles.descHeading}>Hi, welcome to WeOwn Dashboard</h4>
                        </div>
                    </div>
                    <div className={styles.progress}>
                        <div className={styles.stepProgress}>
                            <div className={styles.circleHead}>
                                <h2>Progress Bars</h2>
                            </div>
                            <div className={styles.stepmid}>
                                <div className={styles.steptext}>
                                    <p>Total Progress Bar</p>
                                    <h2>1,234</h2>
                                </div>
                                <CustomizedProgressBars />
                            </div>
                            <div className={styles.stepbottom}>
                                <div className={styles.bottomcontent}>
                                    <div>
                                        <p>Metric 1</p>
                                        <h3>1,234</h3>
                                    </div>
                                    <div>
                                        <p>Metric 2</p>
                                        <h3>1,234</h3>
                                    </div>
                                    <div>
                                        <p>Metric 3</p>
                                        <h3>1,234</h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.cirleProgress}>
                            <div className={styles.circleHead}>
                                <h2>Pie Chart 2 + Progress Bars</h2>
                            </div>
                            <div className={styles.circleSection}>
                                <CircularDeterminate size={160} />
                                <div className={styles.circletext}>
                                    <div className={styles.textblock}>
                                        <div className={styles.innerText}>
                                            <p>Metric 1</p>
                                            <h4>1,234,567</h4>
                                        </div>
                                        <ProgressBar size={10} />
                                    </div>
                                    <div className={styles.textblock}>
                                        <div className={styles.innerText}>
                                            <p>Metric 2</p>
                                            <h4>1,234,567</h4>
                                        </div>
                                        <ProgressBar size={10} />
                                    </div>
                                    <div className={styles.textblock}>
                                        <div className={styles.innerText}>
                                            <p>Metric 3</p>
                                            <h4>1,234,567</h4>
                                        </div>
                                        <ProgressBar size={10} />
                                    </div>
                                    <div className={styles.textblock}>
                                        <div className={styles.innerText}>
                                            <p>Metric 4</p>
                                            <h4>1,234,567</h4>
                                        </div>
                                        <ProgressBar size={10} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.midBlock}>
                        <div className={styles.midleft}>
                            <div className={styles.countblock}>
                                <div className={styles.countblockdesc}>
                                    <p>Properties</p>
                                    <h3>56</h3>
                                    <p>Over the last 24 hours</p>
                                </div>
                                <div className={styles.countblockdesc}>
                                    <p>Builders</p>
                                    <h3>12</h3>
                                    <p>Over the last 24 hours</p>
                                </div>
                            </div>
                            <div className={styles.bargraph}>
                                <div className={styles.barTitle}>
                                    <h2>Bar Chart 1</h2>
                                </div>
                                <div className={styles.bar}>
                                    <StackBars />
                                </div>
                            </div>
                            {/* <div className={styles.priority}>
                                <div className={styles.priorhead}>
                                    <h2>High Priority Assignments</h2>
                                </div>
                                <div className={styles.priorcards}>
                                    <div className={styles.cardinfo}>
                                        <h3>Property Update</h3>
                                        <p>Hey there, how ya doing</p>
                                    </div>
                                    <div className={styles.cardstack}>
                                        <AvatarGroup />
                                    </div>
                                </div>
                            </div> */}
                        </div>
                        <div className={styles.midright}>
                            <div className={styles.calendarContainer}>
                                {/* <DateCalendarValue /> */}
                            </div>
                            <div className={styles.activity}>
                                <div className={styles.acthead}>
                                    <h3>Activity</h3>
                                </div>
                                <div className={styles.singleact}>
                                    <h5>Yogesh joined Team Developers</h5>
                                    <h6>04 April, 2024 | 04:00 PM</h6>
                                </div>
                                <div className={styles.singleact}>
                                    <h5>Yogesh joined Team Developers</h5>
                                    <h6>04 April, 2024 | 04:00 PM</h6>
                                </div>
                                <div className={styles.singleact}>
                                    <h5>Yogesh joined Team Developers</h5>
                                    <h6>04 April, 2024 | 04:00 PM</h6>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.endBlock}>
                        <div className={styles.chartEnd}>
                            <div className={styles.stepProgress1}>
                                <div className={styles.circleHead}>
                                    <h2>Pie Chart 3</h2>
                                </div>
                                <div className={styles.stepmid1}>
                                    <div className={styles.steptext1}>
                                        <p>Total Pie Chart 3</p>
                                        <h2>1,234</h2>
                                    </div>
                                </div>
                                <div className={styles.stepbottom1}>
                                <div className={styles.bottomcontent2}>
                                    <div>
                                        <p>Metric 1</p>
                                        <h3>1,234</h3>
                                    </div>
                                    <div>
                                        <p>Metric 2</p>
                                        <h3>1,234</h3>
                                    </div>
                                    <div>
                                        <p>Metric 3</p>
                                        <h3>1,234</h3>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className={styles.circularProgress}>
                                <CircularDeterminate size={180} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default Admin;