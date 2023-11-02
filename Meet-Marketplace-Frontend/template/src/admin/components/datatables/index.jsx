import React, { Component } from "react";
import { Link } from "react-router-dom";
import SidebarNav from "../sidebar";
import { Table, Switch } from "antd";
import {
    itemRender,
    onShowSizeChange,
  } from "../../components/paginationfunction";

class Datatables extends Component {

    constructor(props) {
        super(props);
      
        this.state = {
          data: [
            {
                id: 1,
                name: "Tiger Nixon",
                position: "System Architect",
                office: "Edinburgh",
                age: "61",
                start_date: "2011/04/25",
                salary: "$320,800"
            },
            {
                id: 2,
                name: "Garrett Winters",
                position: "Accountant",
                office: "Tokyo",
                age: "63",
                start_date: "2011/07/25",
                salary: "$170,750"
            },
            {
                id: 3,
                name: "Ashton Cox",
                position: "Junior Technical Author",
                office: "San Francisco",
                age: "66",
                start_date: "2009/01/12",
                salary: "$86,000"
            },
            {
                id: 4,
                name: "Cedric Kelly",
                position: "Senior Javascript Developer",
                office: "Edinburgh",
                age: "22",
                start_date: "2012/03/29",
                salary: "$433,060"
            },
            {
                id: 5,
                name: "Airi Satou",
                position: "Accountant",
                office: "Tokyo",
                age: "33",
                start_date: "2008/11/28",
                salary: "$162,700",
            },
            {
                id: 6,
                name: "Brielle Williamson",
                position: "Integration Specialist",
                office: "New York",
                age: "61",
                start_date: "2012/12/02",
                salary: "$372,000",
            },
            {
                id: 7,
                name: "Herrod Chandler",
                position: "Sales Assistant",
                office: "San Francisco",
                age: "59",
                start_date: "2012/08/06",
                salary: "$137,500"
            },
            {
                id: 8,
                name: "Rhona Davidson",
                position: "Integration Specialist",
                office: "Tokyo",
                age: "55",
                start_date: "2010/10/14",
                salary: "$327,900"
            },
            {
                id: 9,
                name: "Colleen Hurst",
                position: "Javascript Developer",
                office: "San Francisco",
                age: "39",
                start_date: "2009/09/15",
                salary: "$205,500"
            },
            {
                id: 10,
                name: "Sonya Frost",
                position: "Software Engineer",
                office: "Edinburgh",
                age: "23",
                start_date: "2008/12/13",
                salary: "$103,600"
            },
            {
                id: 11,
                name: "Jena Gaines",
                position: "Office Manager",
                office: "London",
                age: "30",
                start_date: "2008/12/19",
                salary: "$90,560"
            },
            {
                id: 12,
                name: "Quinn Flynn",
                position: "Support Lead",
                office: "Edinburgh",
                age: "22",
                start_date: "2013/03/03",
                salary: "$342,000"
            },
            {
                id: 13,
                name: "Charde Marshall",
                position: "Regional Director",
                office: "San Francisco",
                age: "36",
                start_date: "2008/10/16",
                salary: "$470,600"
            },
          ],
        };
      }

  render() {
    const {data} = this.state;

    const columns = [
        {
            title: "Name",
            dataIndex: "name",
            sorter: (a, b) => a.name.length - b.name.length,
        },
        {
            title: "Position",
            dataIndex: "position",
            sorter: (a, b) => a.position.length - b.position.length,
        },
        {
            title: "Office",
            dataIndex: "office",
            sorter: (a, b) => a.office.length - b.office.length,
        },
        {
            title: "Age",
            dataIndex: "age",
            sorter: (a, b) => a.age.length - b.age.length,
        },
        {
            title: "Start Date",
            dataIndex: "start_date",
            sorter: (a, b) => a.start_date.length - b.start_date.length,
        },
        {
            title: "Salary",
            dataIndex: "salary",
            sorter: (a, b) => a.salary.length - b.salary.length,
        },
      ];

    return (
      <>
        <SidebarNav />
        <div className="page-wrapper">
            <div className="content container-fluid">
                {/* Page Header */}
                <div className="page-header">
                    <div className="row">
                        <div className="col-sm-12">
                        <h3 className="page-title">Data Tables</h3>
                        <ul className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/admin">Dashboard</Link></li>
                            <li className="breadcrumb-item active">Data Tables</li>
                        </ul>
                        </div>
                    </div>
                </div>
                {/* /Page Header */}

                <div>
                <div className="col-sm-12">
							<div className="card">
								<div className="card-header">
									<h4 className="card-title">Default Datatable</h4>
									<p className="card-text">
										This is the most basic example of the datatables with zero configuration. Use the <code>.datatable</code> class to initialize datatables.
									</p>
								</div>
								<div className="card-body">
									<div className="table-responsive">
                                        <Table
                                            className="table-striped"
                                            style={{ overflowX: "auto" }}
                                            columns={columns}
                                            // bordered
                                            dataSource={data}
                                            rowKey={(record) => record.id}
                                            showSizeChanger={true}
                                            pagination={{
                                            total: data.length,
                                            showTotal: (total, range) =>
                                                `Showing ${range[0]} to ${range[1]} of ${total} entries`,
                                            showSizeChanger: true,
                                            onShowSizeChange: onShowSizeChange,
                                            itemRender: itemRender,
                                            }}
                                        />
									</div>
								</div>
							</div>
						</div>
                    </div>
                </div>			
            </div>
      </>
    );
  }
}

export default Datatables;
