/*
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
export default {
  'component.plugin.tip1': '注意：自定义插件后（修改、新增、删除等），需更新 schema.json。',
  'component.plugin.tip2': '如何更新？',
  "component.select.pluginTemplate": '选择插件模板',
  'component.step.select.pluginTemplate.select.option': '手动配置',
  'component.plugin.pluginTemplate.tip1': '1. 若路由已配置插件，则插件模板数据将与已配置的插件数据合并。',
  'component.plugin.pluginTemplate.tip2': '2. 插件模板相同的插件会覆盖掉原有的插件。',
  // cors
  'component.pluginForm.cors.allow_origins.tooltip': '允许跨域访问的 Origin，格式如：scheme://host:port，比如: https://somehost.com:8081 。多个值使用 , 分割，allow_credential 为 false 时可以使用 * 来表示所有 Origin 均允许通过。你也可以在启用了 allow_credential 后使用 ** 强制允许所有 Origin 都通过，但请注意这样存在安全隐患。',
  'component.pluginForm.cors.allow_origins.extra': '例如: https://somehost.com:8081',
  'component.pluginForm.cors.allow_methods.tooltip': '允许跨域访问的 Method，比如: GET，POST等。多个值使用 , 分割，allow_credential 为 false 时可以使用 * 来表示所有 Origin 均允许通过。你也可以在启用了 allow_credential 后使用 ** 强制允许所有 Method 都通过，但请注意这样存在安全隐患。',
  'component.pluginForm.cors.allow_headers.tooltip': '允许跨域访问时请求方携带哪些非 CORS规范 以外的 Header， 多个值使用 , 分割，allow_credential 为 false 时可以使用 * 来表示所 有 Header 均允许通过。你也可以在启用了 allow_credential 后使用 ** 强制允许所有 Method 都通过，但请注意这样存在安全隐患。',
  'component.pluginForm.cors.expose_headers.tooltip': '允许跨域访问时响应方携带哪些非 CORS规范 以外的 Header， 多个值使用 , 分割。',
  'component.pluginForm.cors.max_age.tooltip': '浏览器缓存 CORS 结果的最大时间，单位为秒，在这个时间范围内浏览器会复用上一次的检查结果，-1 表示不缓存。',
  'component.pluginForm.cors.allow_credential.tooltip': '是否允许跨域访问的请求方携带凭据（如 Cookie 等）。根据 CORS 规范，如果设置该选项为 true，那么将不能在其他选项中使用 * 。',
  'component.pluginForm.cors.allow_origins_by_regex.tooltip': '使用正则表达式数组来匹配允许跨域访问的 Origin, 如[".*.test.com"] 可以匹配任何test.com的子域名 * 。',

  // referer-restriction
  'component.pluginForm.referer-restriction.whitelist.tooltip': '域名列表。域名开头可以用\'*\'作为通配符。',
  'component.pluginForm.referer-restriction.bypass_missing.tooltip': '当 Referer 不存在或格式有误时，是否绕过检查。',

  // api-breaker
  'component.pluginForm.api-breaker.break_response_code.tooltip': '不健康返回错误码。',
  'component.pluginForm.api-breaker.max_breaker_sec.tooltip': '最大熔断持续时间。',
  'component.pluginForm.api-breaker.unhealthy.http_statuses.tooltip': '不健康时候的状态码。',
  'component.pluginForm.api-breaker.unhealthy.failures.tooltip': '触发不健康状态的连续错误请求次数。',
  'component.pluginForm.api-breaker.healthy.http_statuses.tooltip': '健康时候的状态码。',
  'component.pluginForm.api-breaker.healthy.successes.tooltip': '触发健康状态的连续正常请求次数。',

  // proxy-mirror
  'component.pluginForm.proxy-mirror.host.tooltip': '指定镜像服务地址，例如：http://127.0.0.1:9797（地址中需要包含 schema ：http或https，不能包含 URI 部分）',
  'component.pluginForm.proxy-mirror.host.extra': '例如：http://127.0.0.1:9797（地址中需要包含 schema：http或https，不能包含 URI 部分）',
  'component.pluginForm.proxy-mirror.host.ruletip': '地址中需要包含 schema ：http或https，不能包含 URI 部分',

  // limit-conn
  'component.pluginForm.limit-conn.conn.tooltip': '允许的最大并发请求数。超过 conn 的限制、但是低于 conn + burst 的请求，将被延迟处理。',
  'component.pluginForm.limit-conn.burst.tooltip': '允许被延迟处理的并发请求数。',
  'component.pluginForm.limit-conn.default_conn_delay.tooltip': '默认的典型连接（或请求）的处理延迟时间。',
  'component.pluginForm.limit-conn.key.tooltip': '用户指定的限制并发级别的关键字，可以是客户端 IP 或服务端 IP。例如，可以使用主机名（或服务器区域）作为关键字，以便限制每个主机名的并发性。 否则，我们也可以使用客户端地址作为关键字，这样我们就可以避免单个客户端用太多的并行连接或请求淹没我们的服务。当前接受的 key 有："remote_addr"（客户端 IP 地址）, "server_addr"（服务端 IP 地址）, 请求头中的"X-Forwarded-For" 或 "X-Real-IP", "consumer_name"（consumer 的 username）。',
  'component.pluginForm.limit-conn.rejected_code.tooltip': '当请求超过 conn + burst 这个阈值时，返回的 HTTP 状态码。',
  // limit-req
  'component.pluginForm.limit-req.rate.tooltip': '指定的请求速率（以秒为单位），请求速率超过 rate 但没有超过 （rate + brust）的请求会被加上延时。',
  'component.pluginForm.limit-req.burst.tooltip': '请求速率超过（rate + brust）的请求会被直接拒绝。',
  'component.pluginForm.limit-req.key.tooltip': '用来做请求计数的依据，当前接受的 key 有："remote_addr"(客户端IP地址), "server_addr"(服务端 IP 地址), 请求头中的"X-Forwarded-For" 或 "X-Real-IP"，"consumer_name"(consumer 的 username).',
  'component.pluginForm.limit-req.rejected_code.tooltip': '当请求超过阈值被拒绝时，返回的 HTTP 状态码。',

  'component.plugin.form': '表单',
  'component.plugin.format-codes.disable': '用于格式化 JSON 或 YAML 内容',
  'component.plugin.editor': '插件配置',
  'component.plugin.noConfigurationRequired': '本插件无需配置',
};
