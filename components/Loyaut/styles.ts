import styled from "@emotion/styled"
import { NavLink } from "react-router-dom"

export const AppHeader = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 120px;
  border-bottom: 1px solid black;
  background-color: white;
  padding: 10px 50px;
`

export const HeaderLogoWrapper = styled.div`
  width: 120px;
  height: 100%;
`

export const HeaderLogoImage = styled.img`
  width: 100%;
  height: 100%;
`

export const HeaderNavigation = styled.div`
  height: 100%;
  display: flex;
  gap: 30px;
  align-items: center;
`

// styles для активной ссылки NavLink
export const resolveActiveNavLinkStyles = ({ isActive }: { isActive: boolean }) => ({
  fontWeight: isActive ? "bold" : "normal",
  textDecoration: isActive ? "underline" : "none",
})

export const HeaderNavLink = styled(NavLink)`
  font-size: 28px;
  color: black;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

export const AppMain = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  background-color: #182434ff;
`





