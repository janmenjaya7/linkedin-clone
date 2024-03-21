import React from "react";
import "../card/cardSection.css";
import {
  BookmarkFill,
  Calendar2Week,
  Image,
  LayoutTextWindow,
  People,
  PlusLg,
  Dot,
  InfoLg,
} from "react-bootstrap-icons";

function CardSection() {
  return (
    <>
      <div id="card-section">
        <div id="content-section" className="">
          <div className="row">
            <div className="col-sm-3">
              <div className="card user-sec">
                <div>
                  <div>
                    <div className="bg-img"></div>
                    <div className="profile-img">
                      <img
                        src="https://images.unsplash.com/photo-1603707281027-aeaec3d0ecbc?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBlcnNvbiUyMGZhY2V8ZW58MHx8MHx8fDA%3D"
                        alt="fdaf"
                        height={70}
                        width={70}
                        className="rounded-circle"
                      />
                    </div>
                    <div className="text-center p-2">
                      <h4>Janmenjaya Biswal</h4>
                      <p>
                        Currently learning web development from e2eMentorship ||
                        React developer.
                      </p>
                    </div>
                    <div>
                      <hr style={{ margin: 0 }} />
                      <div className="profile-viewer ">
                        <p className="d-flex justify-content-between">
                          profile viewers <span>17</span>
                        </p>
                        <p className="d-flex justify-content-between">
                          post impressions <span>1</span>
                        </p>
                      </div>
                      <hr style={{ margin: 0 }} />
                      <div className="profile-premium">
                        <p>Grow professionally with premium</p>
                        <h6> Try 1 month for $0</h6>
                      </div>
                      <hr style={{ margin: 0 }} />
                      <span className="profile-bookmark d-flex  align-items-center">
                        <BookmarkFill />
                        <span className="mx-2">My items</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mt-2">
                <div>
                  <div>
                    <div className="p-2">
                      <h4 className="profile-heding">Recent</h4>
                      <div>
                        <People color="#000" size={16} />
                        <span className="profile-text">
                          JavaScript Typescript Angular
                          <span className=" overflow-hidden">
                            React Node Ionic Vue Meteor Mithril Ember BackBone
                            Express Next
                          </span>
                        </span>
                      </div>
                      <h4 className="profile-heding">Groups</h4>
                      <div>
                        <People color="#000" size={16} />
                        <span className="profile-text">
                          JavaScript Typescript Angular React Node Ionic Vue
                          Meteor Mithril Ember BackBone Express Next{" "}
                        </span>
                      </div>
                      <div className=" d-flex justify-content-between align-items-center">
                        <h4 className="profile-heding">Events</h4>
                        <PlusLg size={20} />
                      </div>
                      <div>
                        <People color="#000" size={16} />
                        <span className="profile-text">
                          JavaScript Typescript Angular React Node Ionic Vue
                          Meteor Mithril Ember BackBone Express Next{" "}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" col-sm-6">
              <div className="card mb-3">
                <div>
                  <div className="center-btn d-flex align-items-center">
                    <img
                      src="https://images.unsplash.com/photo-1603707281027-aeaec3d0ecbc?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBlcnNvbiUyMGZhY2V8ZW58MHx8MHx8fDA%3D"
                      alt="img2"
                      height={48}
                      width={48}
                      className="me-2 rounded-circle"
                    />
                    <button className="profile-btn  col-sm-10">
                      Start a post, try writing with AI
                    </button>
                  </div>
                  <div>
                    <div className=" d-flex justify-content-evenly text-center">
                      <div className="center-image">
                        <Image size={24} color="#378fd9" />
                        <span className="ms-2">Media</span>
                      </div>
                      <div className="center-image">
                        <Calendar2Week size={24} color="#c37d16" />
                        <span className="ms-2">Event</span>
                      </div>
                      <div className="center-image">
                        <LayoutTextWindow size={24} color="#e06847" />
                        <span className="ms-2">Write article</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" card medile-sec">
                <p>
                  In a React application, the src folder is where you put the
                  source code for your application, including your JavaScript,
                  CSS, and other assets. The public folder is where you put the
                  files that need to be publicly available, such as images,
                  fonts, and other static files. Here are some key differences
                  between using images in the src folder and public folder:
                </p>
                <p>
                  In a React application, the src folder is where you put the
                  source code for your application, including your JavaScript,
                  CSS, and other assets. The public folder is where you put the
                  files that need to be publicly available, such as images,
                  fonts, and other static files. Here are some key differences
                  between using images in the src folder and public folder:
                </p>
              </div>
            </div>
            <div className="col-sm-3">
              <div className=" card end-sec">
                <div>
                  <div className="p-2 d-flex justify-content-between  align-items-center">
                    <h5>LinkedIn News</h5>
                    <InfoLg />
                  </div>
                  <li>
                    <span>
                      <Dot size={30} />
                    </span>
                    Lok Sabha polls to begin on April 19
                    <span>Top news • 150 readers</span>
                  </li>
                </div>

                <p>
                  In a React application, the src folder is where you put the
                  source code for your application, including your JavaScript,
                  CSS, and other assets. The public folder is where you put the
                  files that need to be publicly available, such as images,
                  fonts, and other static files. Here are some key differences
                  between using images in the src folder and public folder:
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardSection;
