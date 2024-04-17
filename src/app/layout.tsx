import { AntdRegistry } from '@ant-design/nextjs-registry'

import StyleRegistry from '@/lib/registry'

const RootLayout = ({ children }: React.PropsWithChildren) => (
  <html lang="en">
    <body>
      <StyleRegistry>
        <AntdRegistry>{children}</AntdRegistry>
      </StyleRegistry>
    </body>
  </html>
)

export default RootLayout
