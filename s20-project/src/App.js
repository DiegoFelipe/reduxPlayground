import React, { Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import AllQuotes from "./pages/AllQuotes";
import Layout from "./components/layout/Layout";

const NewQuote = React.lazy(() => import("./pages/NewQuote"));
const QuoteDetails = React.lazy(() => import("./pages/QuoteDetails"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <Layout>
      <Suspense fallback={<p>Loading</p>}>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/quotes" />
          </Route>
          <Route path="/quotes" exact>
            <AllQuotes />
          </Route>
          <Route path="/quotes/:quoteId">
            <QuoteDetails />
          </Route>
          <Route path="/new-quote">
            <NewQuote />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;
