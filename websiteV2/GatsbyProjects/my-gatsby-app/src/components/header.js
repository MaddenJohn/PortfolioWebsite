import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { Grid } from '@mui/material';

const buttonSize = 15;

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `black`,
      // marginBottom: `1.45rem`,
      position: "fixed",
      zIndex: 1,
      width: "100%"
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        // maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <div style={{ margin: 0}}>
        <Grid container columnSpacing={0}>
          <Grid item xs={7}>
            <Link
              to="/"
              style={{
                color: `white`,
                textDecoration: `none`,
                fontSize: 30,
                padding: `1.45rem 1.0875rem`,
              }}
            >
              {siteTitle}
            </Link>
          </Grid>
          <Grid item xs={1} textAlign="center">
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
            fontSize: buttonSize,
            textAlign: "center"
          }}
        >
          Home
        </Link></Grid>
        <Grid item xs={1} textAlign="center"><Link
          to="/experience"
          style={{
            color: `white`,
            textDecoration: `none`,
            fontSize: buttonSize,
            textAlign: "center"
          }}
        >
          Experience
        </Link></Grid>
        <Grid item xs={1} textAlign="center"><Link
          to="/projects"
          style={{
            color: `white`,
            textDecoration: `none`,
            fontSize: buttonSize,
            textAlign: "center"
          }}
        >
          Projects
        </Link></Grid>
        <Grid item xs={1} textAlign="center"><Link
          to="/contact"
          style={{
            color: `white`,
            textDecoration: `none`,
            fontSize: buttonSize,
            textAlign: "center"
          }}
        >
          Contact
        </Link></Grid>
        <Grid item xs={1} textAlign="center"><Link
          to="/resume"
          style={{
            color: `white`,
            textDecoration: `none`,
            fontSize: buttonSize,
            textAlign: "center"
          }}
        >
          Resume
        </Link></Grid>
        </Grid>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
