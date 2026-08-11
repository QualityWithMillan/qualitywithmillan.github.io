/**
 * Code Tabs JavaScript Engine
 * Dynamic client-side syntax highlighter, layout renderer, clipboard controller, 
 * and accessibility keyboard navigation handler.
 *
 * Creates dynamic, accessible tabbed code block examples.
 * @param {string} containerId - The DOM element ID where the tabs should be rendered.
 * @param {Array<{language: string, code: string}>} tabs - Array of tab objects.
 */
function createCodeTabs(containerId, tabs) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.className = 'code-example-tabs';

  // Helper for syntax highlighting
  function highlightCode(code, language) {
    const esc = str => str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    let html = esc(code);
    const lang = (language || '').toLowerCase();
    
    if (lang === 'curl' || lang === 'bash' || lang === 'sh') {
      const regex = /('[^']*'|"[^"]*")|\b(curl|ollama)\b|(\s)(-\w|--\w+)\b/g;
      html = html.replace(regex, (match, p1, p2, p3, p4) => {
        if (p1) {
          const valRegex = /("(?:kimi-k3:cloud|Hello)")/g;
          const innerHtml = p1.replace(valRegex, '<span class="token-val">$1</span>');
          return `<span class="token-str">${innerHtml}</span>`;
        }
        if (p2) return `<span class="token-cmd">${p2}</span>`;
        if (p3 && p4) return `${p3}<span class="token-opt">${p4}</span>`;
        return match;
      });
    } else if (lang === 'python' || lang === 'javascript' || lang === 'js' || lang === 'java') {
      const regex = /("[^"]*")|\b(import|from|const|await|let|var|function|return|class|public|static|void|throws|new|if|else|for|while)\b|\b(\w+)(?=\()|\b(\w+)(?=\s*:)/g;
      html = html.replace(regex, (match, p1, p2, p3, p4) => {
        if (p1) return `<span class="token-string">${p1}</span>`;
        if (p2) return `<span class="token-keyword">${p2}</span>`;
        if (p3) return `<span class="token-function">${p3}</span>`;
        if (p4) return `<span class="token-property">${p4}</span>`;
        return match;
      });
    }
    return html;
  }

  // Create tab list
  const tabList = document.createElement('div');
  tabList.className = 'tabs-list';

  // Create buttons group
  const buttonsGroup = document.createElement('div');
  buttonsGroup.className = 'tabs-buttons-group';
  buttonsGroup.setAttribute('role', 'tablist');
  buttonsGroup.setAttribute('aria-label', 'Code Examples');
  tabList.appendChild(buttonsGroup);

  // Create copy button
  const copyBtn = document.createElement('button');
  copyBtn.className = 'copy-code-btn';
  copyBtn.setAttribute('aria-label', 'Copy code to clipboard');
  copyBtn.innerHTML = '<i class="far fa-copy"></i>';
  tabList.appendChild(copyBtn);

  // Create panel container
  const panelContainer = document.createElement('div');
  panelContainer.className = 'tab-panels';

  // Build tabs and panels
  tabs.forEach((tab, index) => {
    const isFirst = index === 0;
    const tabId = `${containerId}-tab-${index}`;
    const panelId = `${containerId}-panel-${index}`;
    const langLower = tab.language.toLowerCase();
    const isDarkTheme = langLower === 'curl' || langLower === 'bash' || langLower === 'sh';

    // Button
    const btn = document.createElement('button');
    btn.className = 'tab-button';
    btn.setAttribute('role', 'tab');
    btn.setAttribute('aria-selected', isFirst ? 'true' : 'false');
    btn.setAttribute('aria-controls', panelId);
    btn.setAttribute('id', tabId);
    if (!isFirst) {
      btn.setAttribute('tabindex', '-1');
    }
    btn.textContent = tab.language;
    buttonsGroup.appendChild(btn);

    // Panel
    const panel = document.createElement('div');
    panel.className = `tab-panel ${isDarkTheme ? 'panel-dark' : 'panel-light'}`;
    panel.setAttribute('id', panelId);
    panel.setAttribute('role', 'tabpanel');
    panel.setAttribute('aria-labelledby', tabId);
    panel.setAttribute('tabindex', '0');
    if (!isFirst) {
      panel.setAttribute('hidden', '');
    }

    const pre = document.createElement('pre');
    const codeEl = document.createElement('code');
    codeEl.className = `language-${langLower}`;
    codeEl.innerHTML = highlightCode(tab.code, tab.language);
    
    pre.appendChild(codeEl);
    panel.appendChild(pre);
    panelContainer.appendChild(panel);
  });

  container.innerHTML = '';
  container.appendChild(tabList);
  container.appendChild(panelContainer);

  // Setup copy to clipboard logic
  copyBtn.addEventListener('click', () => {
    const activePanel = panelContainer.querySelector('.tab-panel:not([hidden])');
    if (activePanel) {
      const codeEl = activePanel.querySelector('code');
      if (codeEl) {
        const codeText = codeEl.textContent;
        navigator.clipboard.writeText(codeText).then(() => {
          copyBtn.innerHTML = '<i class="fas fa-check" style="color: #28a745;"></i>';
          setTimeout(() => {
            copyBtn.innerHTML = '<i class="far fa-copy"></i>';
          }, 2000);
        }).catch(err => {
          console.error('Failed to copy code: ', err);
        });
      }
    }
  });

  // Setup tab switcher logic
  const tabButtons = buttonsGroup.querySelectorAll('[role="tab"]');
  const tabPanels = panelContainer.querySelectorAll('[role="tabpanel"]');

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Deactivate all tabs
      tabButtons.forEach(btn => {
        btn.setAttribute('aria-selected', 'false');
        btn.setAttribute('tabindex', '-1');
      });
      // Hide all panels
      tabPanels.forEach(panel => {
        panel.setAttribute('hidden', '');
      });

      // Activate clicked tab
      button.setAttribute('aria-selected', 'true');
      button.removeAttribute('tabindex');

      // Show targeted panel
      const targetPanelId = button.getAttribute('aria-controls');
      const targetPanel = panelContainer.querySelector('#' + targetPanelId);
      if (targetPanel) {
        targetPanel.removeAttribute('hidden');
      }
    });

    // Arrow key keyboard navigation
    button.addEventListener('keydown', (e) => {
      const index = Array.from(tabButtons).indexOf(button);
      let newIndex = null;

      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        newIndex = (index + 1) % tabButtons.length;
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        newIndex = (index - 1 + tabButtons.length) % tabButtons.length;
      } else if (e.key === 'Home') {
        newIndex = 0;
      } else if (e.key === 'End') {
        newIndex = tabButtons.length - 1;
      }

      if (newIndex !== null) {
        tabButtons[newIndex].focus();
        tabButtons[newIndex].click();
        e.preventDefault();
      }
    });
  });
}
