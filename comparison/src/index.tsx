import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'

const container = document.getElementById('root');
if (container) {
    const root = createRoot(container);
    root.render(
        <StrictMode>
            <Suspense fallback="Loading...">
                <div>Hello world</div>
            </Suspense>
        </StrictMode>
    );
}
