<template>
  <div>
    <nav>
      <a class="title" target="_blank" href="/">ScrapydWeb</a>

      <div class="dropdown">
        <a class="dropbtn">
          <span>127.0.0.1:6800</span>
        </a>
      </div>

      <ul id="nav_daemonstatus">
        <li>
          <a
            target="_blank"
            class="request"
            href="http://127.0.0.1:6800"
          >
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-host"></use>
            </svg>
            <span id="nav_node_name"></span>
          </a>
        </li>
        <li>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-pending"></use>
          </svg>
          <span id="nav_pending"></span>
        </li>
        <li>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-running"></use>
          </svg>
          <span id="nav_running"></span>
        </li>
        <li>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-finished"></use>
          </svg>
          <span id="nav_finished"></span>
        </li>
      </ul>
    </nav>

    <main>
      <aside>
        <div>
          <h3>Overview</h3>
          <ul>
            <li>
              <a id="menu_servers" href="/servers" onclick="showLoader();">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-servers"></use>
                </svg>
                <span>Servers</span>
              </a>
            </li>
            <li>
              <a id="menu_tasks" href="/timetasks" onclick="showLoader();">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-timer"></use>
                </svg>
                <span>Timer Tasks</span>
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3>Dashboard</h3>
          <ul>
            <li>
              <a id="menu_jobs" href="/jobs" onclick="showLoader();">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-jobs"></use>
                </svg>
                <span>Jobs</span>
              </a>
            </li>
            <li>
              <a id="menu_nodereports" href="/reports" onclick="showLoader();">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-report"></use>
                </svg>
                <span>Node Reports</span>
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3>Operations</h3>
          <ul>
            <li>
              <a id="menu_deploy" href="/deploy" onclick="showLoader();">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-upload"></use>
                </svg>
                <span>Deploy Project</span>
              </a>
            </li>
            <li>
              <a id="menu_schedule" href="/runspider" onclick="showLoader();">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-run"></use>
                </svg>
                <span>Run Spider</span>
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3>Files</h3>
          <ul>
            <li>
              <a id="menu_projects" href="/projects" onclick="showLoader();">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-projects"></use>
                </svg>
                <span>Projects</span>
              </a>
            </li>
            <li>
              <a id="menu_logs" href="/logs" onclick="showLoader();">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-logs"></use>
                </svg>
                <span>Logs</span>
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3>Utilities</h3>
          <ul>
            <li>
              <a id="menu_sendtext" href="/sendtext" onclick="showLoader();">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-send"></use>
                </svg>
                <span>Send Text</span>
              </a>
            </li>
            <li>
              <a id="menu_parse" href="/parselog" onclick="showLoader();">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-parse"></use>
                </svg>
                <span>Parse Log</span>
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3>System</h3>
          <ul>
            <li>
              <a id="menu_settings" href="/settings" onclick="showLoader();">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-settings"></use>
                </svg>
                <span>Settings</span>
              </a>
            </li>
          </ul>
        </div>
        <div class="github">
          <a
            id="scrapydweb_version"
            class="request"
            href="https://pypi.org/project/scrapydweb/"
            target="_blank"
          >v1.4.0</a>
          <div>
          </div>
        </div>
      </aside>

      <div class="content-wrap">
        <!-- Route -->
        <nuxt />
      </div>

    </main>

  </div>
</template>

<script lang="ts" src="./default.ts" />
