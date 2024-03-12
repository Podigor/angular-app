export default class DashboardPage {
    _dashboardPageUrl = '/pages/dashboard'

    get dashboardPageUrl() {
        return Cypress.config('baseUrl') + this._dashboardPageUrl
    }
}