import TradingViewWidget from "@/components/TradingViewWidgets/TradingViewWidget";
import { MARKET_OVERVIEW_WIDGET_CONFIG, HEATMAP_WIDGET_CONFIG, TOP_STORIES_WIDGET_CONFIG, MARKET_DATA_WIDGET_CONFIG } from "@/lib/constants";


export default function Home() {
  const baseScriptUrl = 'https://s3.tradingview.com/external-embedding/embed-widget-';
  return (
    <div className="flex home-wrapper min-h-screen">
      <section className="grid w-full gap-8 home-section">
        <div className="md:col-span-1 xl:col-span-1">
          <TradingViewWidget
            title="Market Overview"
            scriptUrl={`${baseScriptUrl}market-overview.js`}
            config={MARKET_OVERVIEW_WIDGET_CONFIG}
            className="custom-chart"
          />
        </div>
        <div className="md:col-span xl:col-span-2">
          <TradingViewWidget
            title="Stock Heat Map"
            scriptUrl={`${baseScriptUrl}stock-heatmap.js`}
            config={HEATMAP_WIDGET_CONFIG}
            className="custom-chart"
          />
        </div>
      </section>
      <section className="grid w-full gap-8 home-section">
        <div className="h-full md:col-span-1 xl:col-span-1">
          <TradingViewWidget
            scriptUrl={`${baseScriptUrl}timeline.js`}
            config={TOP_STORIES_WIDGET_CONFIG}
          />
        </div>
        <div className="h-full md:col-span-1 xl:col-span-2">
          <TradingViewWidget
            scriptUrl={`${baseScriptUrl}market-quotes.js`}
            config={MARKET_DATA_WIDGET_CONFIG}
          />
        </div>
      </section>
    </div>
  );
}
