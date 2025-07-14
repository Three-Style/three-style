import React from 'react'
import HomeFooter from "../components/partials/Footer/footer";
import HomeHeader from "../components/partials/Header/header";
import ProfileSideMenu from '../components/profile-side';

const AccountOrder = () => {
  return (
    <>
      <HomeHeader />

      {/* Main */}
      <main>
        {/* Breadcrumb */}
        <div className="py-6">
          <div className="container">
            <div className="row">
              {/* Profile Menu */}
              <ProfileSideMenu />
              {/* End Profile Menu */}
              {/* Content */}
              <div className="col-lg-8 col-xxl-9">
                <div className="table-responsive fs-md mb-4">
                  <table className="table table-bordered table-hover mb-0">
                    <thead className="text-700 bg-gray-200">
                      <tr>
                        <th className="fw-600">Order #</th>
                        <th className="fw-600">Date Purchased</th>
                        <th className="fw-600">Status</th>
                        <th className="fw-600 text-end">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-3">
                          <a
                            className="text-mode"
                            href="#order-details"
                            data-bs-toggle="modal"
                          >
                            #8560
                          </a>
                        </td>
                        <td className="p-3">May 21, 2021</td>
                        <td className="p-3">
                          <span className="badge bg-info m-0">In Progress</span>
                        </td>
                        <td className="p-3 text-end">$150</td>
                      </tr>
                      <tr>
                        <td className="p-3">
                          <a
                            className="text-mode"
                            href="#order-details"
                            data-bs-toggle="modal"
                          >
                            #8560
                          </a>
                        </td>
                        <td className="p-3">May 21, 2021</td>
                        <td className="p-3">
                          <span className="badge bg-danger m-0">Cancel</span>
                        </td>
                        <td className="p-3 text-end">$150</td>
                      </tr>
                      <tr>
                        <td className="p-3">
                          <a
                            className="text-mode"
                            href="#order-details"
                            data-bs-toggle="modal"
                          >
                            #8560
                          </a>
                        </td>
                        <td className="p-3">May 21, 2021</td>
                        <td className="p-3">
                          <span className="badge bg-success m-0">Delivered</span>
                        </td>
                        <td className="p-3 text-end">$150</td>
                      </tr>
                      <tr>
                        <td className="p-3">
                          <a
                            className="text-mode"
                            href="#order-details"
                            data-bs-toggle="modal"
                          >
                            #8560
                          </a>
                        </td>
                        <td className="p-3">May 21, 2021</td>
                        <td className="p-3">
                          <span className="badge bg-warning m-0">On Hold</span>
                        </td>
                        <td className="p-3 text-end">$150</td>
                      </tr>
                      <tr>
                        <td className="p-3">
                          <a
                            className="text-mode"
                            href="#order-details"
                            data-bs-toggle="modal"
                          >
                            #8560
                          </a>
                        </td>
                        <td className="p-3">May 21, 2021</td>
                        <td className="p-3">
                          <span className="badge bg-info m-0">In Progress</span>
                        </td>
                        <td className="p-3 text-end">$150</td>
                      </tr>
                      <tr>
                        <td className="p-3">
                          <a
                            className="text-mode"
                            href="#order-details"
                            data-bs-toggle="modal"
                          >
                            #8560
                          </a>
                        </td>
                        <td className="p-3">May 21, 2021</td>
                        <td className="p-3">
                          <span className="badge bg-info m-0">In Progress</span>
                        </td>
                        <td className="p-3 text-end">$150</td>
                      </tr>
                      <tr>
                        <td className="p-3">
                          <a
                            className="text-mode"
                            href="#order-details"
                            data-bs-toggle="modal"
                          >
                            #8560
                          </a>
                        </td>
                        <td className="p-3">May 21, 2021</td>
                        <td className="p-3">
                          <span className="badge bg-info m-0">In Progress</span>
                        </td>
                        <td className="p-3 text-end">$150</td>
                      </tr>
                      <tr>
                        <td className="p-3">
                          <a
                            className="text-mode"
                            href="#order-details"
                            data-bs-toggle="modal"
                          >
                            #8560
                          </a>
                        </td>
                        <td className="p-3">May 21, 2021</td>
                        <td className="p-3">
                          <span className="badge bg-danger m-0">Cancel</span>
                        </td>
                        <td className="p-3 text-end">$150</td>
                      </tr>
                      <tr>
                        <td className="p-3">
                          <a
                            className="text-mode"
                            href="#order-details"
                            data-bs-toggle="modal"
                          >
                            #8560
                          </a>
                        </td>
                        <td className="p-3">May 21, 2021</td>
                        <td className="p-3">
                          <span className="badge bg-success m-0">Delivered</span>
                        </td>
                        <td className="p-3 text-end">$150</td>
                      </tr>
                      <tr>
                        <td className="p-3">
                          <a
                            className="text-mode"
                            href="#order-details"
                            data-bs-toggle="modal"
                          >
                            #8560
                          </a>
                        </td>
                        <td className="p-3">May 21, 2021</td>
                        <td className="p-3">
                          <span className="badge bg-warning m-0">On Hold</span>
                        </td>
                        <td className="p-3 text-end">$150</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="d-flex align-items-center mt-3">
                  <div className="d-none d-lg-block">Showing: 1 - 12 of 17</div>
                  <div className="ms-lg-auto">
                    <ul className="pagination m-0">
                      <li className="page-item">
                        <a className="page-link" href="#" aria-label="Previous">
                          <span aria-hidden="true">«</span>
                        </a>
                      </li>
                      <li className="page-item active">
                        <a className="page-link" href="#">
                          1
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          2
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          3
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#" aria-label="Next">
                          <span aria-hidden="true">»</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* End Content */}
            </div>
          </div>
        </div>
        {/*Table */}
      </main>
      {/* End Main */}

      <HomeFooter />

    </>
  )
}

export default AccountOrder