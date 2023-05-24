export var menuItems={
  "data": [
    {
      "headTitle1": "General",
      "headTitle2": "Dashboards,Widgets & Layout.",
      "type": "headtitle"
    },
    {
      "title": "Dashboard",
      "icon": "stroke-home",
      "iconf":"fill-home",
      "type": "sub",
      "badgeType": "light-primary",
      "badgeValue": "5",
      "active": false,
      "children": [
        {
          "path": "/",
          "title": "Default",
          "type": "link",
          "active":false
        },
        {
          "path": "/dashboard/employee",
          "title": "Employee",
          "type": "link",
          "active":false
        }
      ]
    },
    {
      "headTitle1": "Applications",
      "headTitle2": "Ready to use apps",
      "type": "headtitle"
    },
    {
      "title": "employees",
      "icon": "stroke-project",
      "iconf":"fill-project",
      "type": "sub",
      "badgeType": "light-secondary",
      "badgeValue": "New",
      "active": false,
      "children": [
        {
          "path": "/employee/employeelist",
          "title": "Employee list",
          "type": "link",
          "active": false
        },
        {
          "path": "/employee/add-employee",
          "title": "Add Employee",
          "type": "link",
          "active": false
        },
        // {
        //   "path": "/employee/create-employee",
        //   "title": "Create Employee",
        //   "type": "link",
        //   "active": false
        // }
      ]
    },
    {
      "title": "attendance",
      "icon": "stroke-project",
      "iconf":"fill-project",
      "type": "sub",
      "badgeType": "light-secondary",
      "badgeValue": "New",
      "active": false,
      "children": [
        {
          "path": "/attendance/viewattendance",
          "title": "View Attendance",
          "type": "link",
          "active": false
        },
      ]
    }
  ]
}