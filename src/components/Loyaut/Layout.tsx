import { ReactNode } from "react"

// Импортируем стилизованные компоненты для заголовка, навигации и основного контента
import {
  AppHeader,
  AppMain,
  HeaderLogoWrapper,
  HeaderLogoImage,
  HeaderNavLink,
  HeaderNavigation,
  resolveActiveNavLinkStyles,
} from "./styles"

type LayoutProps = {
  children: ReactNode
}

function Layout({ children }: LayoutProps) {
  return (
    <>
      <AppHeader>
        <HeaderLogoWrapper>
          <HeaderLogoImage
            src="https://www.designmantic.com/logo-images/6963.png?company=Company%20Name&keyword=employees&slogan=&verify=1"
            alt="App Logo"
          />
        </HeaderLogoWrapper>

        <HeaderNavigation>
          <HeaderNavLink
            to="/create-employee"
            style={resolveActiveNavLinkStyles as any}
          >
            Create Employees
          </HeaderNavLink>

          <HeaderNavLink
            to="/employees"
            style={resolveActiveNavLinkStyles as any}
          >
            Employees
          </HeaderNavLink>
        </HeaderNavigation>
      </AppHeader>

      <AppMain>{children}</AppMain>
    </>
  )
}

export default Layout
