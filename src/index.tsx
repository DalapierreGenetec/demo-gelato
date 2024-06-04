import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { defineCustomElements } from '@genetec/gelato-react'
import { GenDesignSystemProvider } from '@genetec/gelato-react'
import '@genetec/gelato-react/dist/index.css'

defineCustomElements()

const container = document.getElementById('root');
if (container) {
    const root = createRoot(container);
    root.render(
        <StrictMode>
            <Suspense fallback="Loading...">
                <GenDesignSystemProvider useTopLevelStyles={true}>
                    <div>Hello world</div>
                </GenDesignSystemProvider>
            </Suspense>
        </StrictMode>
    );
}
