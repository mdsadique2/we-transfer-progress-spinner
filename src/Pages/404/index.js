import React from 'react'
import './style.css';
import { Trans, withTranslation } from 'react-i18next'
import { Link } from "react-router-dom";
class Error404 extends React.Component {
  render() {
    return <React.Fragment>
      <section className="page page-404">
        <div className="title-404">
          <Trans i18nKey="404Page.404">
            404
          </Trans>
        </div>
        <div className="description-404">
          <Trans i18nKey="404Page.notFound">
            Page not found
          </Trans>
        </div>
        <div className="go-to-home">
          <Link to="/">
            <Trans i18nKey="404Page.goToHome">
              Go to home page
            </Trans>
          </Link>
        </div>
      </section>
    </React.Fragment>
  }
}
export default withTranslation()(Error404)