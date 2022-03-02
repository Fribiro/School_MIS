import styled from "styled-components";

export const DashboardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 98vh;
    overflow-y: hidden;
`

export const DashWrapper = styled.div`
    display: flex;
    width: 100%;
    height: 95%;
`

export const Sidebar = styled.div`
  width: 20%;
  background-color: rgb(251, 251, 255);
  position: sticky;
  top: 50px;


.sidebarWrapper {
  padding: 20px;
  color: #555;
}

.sidebarMenu {
  margin-bottom: 10px;
}

.sidebarTitle {
  font-size: 13px;
  color: rgb(187, 186, 186);
}

.sidebarList {
  list-style: none;
  padding: 5px;
}

.sidebarListItem {
  padding: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  border-radius: 10px;
}

.sidebarListItem.active,
.sidebarListItem:hover {
  background-color: rgb(240, 240, 255);
}

.sidebarIcon{
    margin-right: 5px;
    font-size: 20px !important;
}
.link{
  text-decoration: none;
  color: inherit;
}

`

export const DashContentWrapper = styled.div`
    width: 80%;
`