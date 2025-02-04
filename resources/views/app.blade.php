<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    @viteReactRefresh
    @vite('resources/js/app.jsx')
    @inertiaHead
    @routes
    @vite('resources/css/app.css')
  </head>
  <body>
    @inertia {{-- <div id="app"></div> --}}
    <h1 class="text-3xl font-bold underline">hell</h1>
  </body>
</html>