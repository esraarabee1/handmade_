module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',   // يضيف الـ CSS إلى الصفحة
          'css-loader',     // يتيح Webpack فهم ملفات CSS
          'postcss-loader', // معالجات PostCSS مثل Tailwind CSS
        ],
      },
    ],
  }
  